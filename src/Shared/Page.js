import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function( {name, children} ){
    return (
        <AppContext.Consumer>
            {({page}) => {
                if ( page !== name) {
                    return NodeList;
                }
            return <div> {children} </div>
            }}
        </AppContext.Consumer>
    )
}