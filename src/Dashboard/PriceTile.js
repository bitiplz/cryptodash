import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile} from "../Shared/Tile";
import {fontSize3, fontSizeBig, greenBoxShadow} from "../Shared/Styles";
import {CoinHeaderGridStyled} from "../Settings/CoinHeaderGrid";
import { AppContext } from '../App/AppProvider';

const numberFormat = number => {
    return +(number + '').slice(0,7);
}

const JustifyRight = styled.div`
    justify-self: right;
`;

const JustifyLeft = styled.div`
    justify-self: left;
`;

const TickerPrice = styled.div`
    ${fontSizeBig}
`;

const ChangePct = styled.div`
    color: green;
    ${ props => props.negative && css`
        color: red;
    `}
`;

const PriceTileStyled = styled(SelectableTile)`
    ${props => props.compact && css`
        display: grid;
        ${fontSize3}
        grid-gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        justify-items: right;
    `}

    ${props => props.currentFavorite && css`
        ${greenBoxShadow}
        pointer-events: none;
    `}
`;

function ChangePercent({data}){
    return (
        <JustifyRight>
            <ChangePct negative={ data.CHANGEPCT24HOUR < 0 } >
                {numberFormat(data.CHANGEPCT24HOUR)}%
            </ChangePct>
        </JustifyRight>
    )
}

function PriceTile({sym, data, currentFavorite, selectCurrentFavorite}){
    return (
        <PriceTileStyled
            currentFavorite={currentFavorite}
            onClick={ ()=>selectCurrentFavorite(sym) }
        >
            <CoinHeaderGridStyled>
                <div> {sym} </div>
                <ChangePercent data={data}/>
            </CoinHeaderGridStyled>
            <TickerPrice>
                ${numberFormat( data.PRICE )}
            </TickerPrice>
        </PriceTileStyled>
    );
}

function PriceTileCompact({sym, data, currentFavorite, selectCurrentFavorite}){
    return (
        <PriceTileStyled
            compact
            currentFavorite={currentFavorite}
            onClick={ ()=>selectCurrentFavorite(sym) }
        >
            <JustifyLeft> {sym} </JustifyLeft>
            <ChangePercent data={data}/>
            <div> ${numberFormat( data.PRICE )} </div>
        </PriceTileStyled>
    );
}

export default function({price, index}){
    let sym = Object.keys(price)[0];
    let data = price[sym]['USD'];

    let TileClass = index < 5 ? PriceTile : PriceTileCompact ;

    return (
        <AppContext.Consumer>
            {({currentFavorite, selectCurrentFavorite}) => (
                <TileClass
                    selectCurrentFavorite={selectCurrentFavorite}
                    sym={sym}
                    data={data}
                    currentFavorite={currentFavorite === sym }
                />
            )}
        </AppContext.Consumer>
    )
}