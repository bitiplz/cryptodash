import highchartsConfig from './HighchartsConfig';
import highchartsTheme from './HighchartsTheme';
import React from 'react';
import {Tile} from "../Shared/Tile";
import {AppContext} from "../App/AppProvider";
import ReactHighCharts from 'react-highcharts';
import ChartSelect from './ChartSelect';
import LoadingWrapper from '../Shared/LoadingWrapper';

ReactHighCharts.Highcharts.setOptions(highchartsTheme);

export default function(){
    return (
        <AppContext.Consumer>
            {({historical, changeChartSelect}) =>
                <Tile>
                    <ChartSelect onSelect={ e => changeChartSelect(e.target.value) } />
                    <LoadingWrapper condition={ ()=>historical } placeholder="Loading historical data..." >
                        <ReactHighCharts config={ highchartsConfig( historical ) }/>
                    </LoadingWrapper>
                </Tile>
            }
        </AppContext.Consumer>
    );
}