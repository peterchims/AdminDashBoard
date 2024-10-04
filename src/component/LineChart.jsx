import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  LineSeries,
  Legend,
  Tooltip
} from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../data/dummy';
import { useStateContext } from '../contexts/ContentProvider';


const Chart = () => {
const { currentMode } = useStateContext();

  return (
    <ChartComponent
    id='line-chart'
    height='400px'
      primaryXAxis={LinePrimaryXAxis} 
      primaryYAxis={LinePrimaryYAxis} 
      tooltip={{ enable: true }} 
      chartArea={{border: {width:0}}}
    
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} /> {/* Inject services as an array */}
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} /> // Spread the properties of each series
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Chart;

