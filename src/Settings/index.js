import React from 'react';
import WelcomeMessage from './WellcomeMessage';
import ConfirmButton from './ConfirmButton';
import Search from './Search';
import Page from '../Shared/Page';
import CoinGrid from "./CoinGrid";

export default function(){
    return <Page name="settings">
        <WelcomeMessage/>
        <CoinGrid topSection/>
        <ConfirmButton />
        <Search/>
        <CoinGrid/>
    </Page>;
}