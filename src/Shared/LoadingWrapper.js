import React from 'react';
//import { Tile } from "./Tile";

export default function({ condition, placeholder, children }){

    return <div> { condition() ? children : (placeholder || 'Loading...') } </div>;
}