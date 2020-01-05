import React from 'react';
import { Tile } from "../Shared/Tile";
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import styled from 'styled-components';

const SpotlightName = styled.h2`
    text-align: center;
`;

export default function(){
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
                <Tile>
                    <SpotlightName>{ coinList[currentFavorite].Symbol }</SpotlightName>
                    <CoinImage spotlight coin={ coinList[currentFavorite] } />
                    <SpotlightName>{ coinList[currentFavorite].CoinName }</SpotlightName>
                </Tile>
            }
        </AppContext.Consumer>
    );
}
