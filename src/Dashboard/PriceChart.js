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
            {({historical}) =>
                <Tile>
                    { historical ?
                        <ReactHighCharts config={ highchartsConfig( historical ) }/>
                        :<div>Loading historical data...</div>
                    }
                </Tile>
            }
        </AppContext.Consumer>
    );
}