import highchartsConfig from './HighchartsConfig';
import highchartsTheme from './HighchartsTheme';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighCharts from 'react-highcharts';

ReactHighCharts.Highcharts.setOptions(highchartsTheme);

export default function(){
    return (
        <AppContext.Consumer>
            {({}) =>
                <Tile>
                   <ReactHighCharts config={ highchartsConfig() }/>
                </Tile>
            }
        </AppContext.Consumer>
    );
}