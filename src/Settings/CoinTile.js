import React from 'react';
import {AppContext} from "../App/AppProvider";
import {SelectableTile, DisabledTile, DeletableTile} from "../Shared/Tile"
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from '../Shared/CoinImage';

function onCoinClick( topSection, coinKey, addCoin, removeCoin ){
    return ()=>( topSection ? removeCoin : addCoin )( coinKey )
}

export default function({coinKey, topSection}){
    return <AppContext.Consumer>
    {({coinList, favorites, addCoin, removeCoin, isInFavorites}) => {
        let coin = coinList[coinKey];

        const TileClass = topSection ? DeletableTile : ( isInFavorites( coinKey ) ? DisabledTile : SelectableTile );

        return <TileClass onClick={ onCoinClick( topSection, coinKey, addCoin, removeCoin ) }>
            <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
        </TileClass>;
    }}
    </AppContext.Consumer>;
}