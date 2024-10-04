import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  SplineAreaSeries, // Include SplineAreaSeries
  Legend
} from '@syncfusion/ej2-react-charts';
import Header from '../../component/Header';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContentProvider';

const Area = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      {/* Add a header if needed */}
      <Header category="Chart" title="Area Chart" />
      
      <ChartComponent
        id="area-chart"
        height="400px"
        primaryXAxis={areaPrimaryXAxis} 
        primaryYAxis={areaPrimaryYAxis}  
        chartArea={{ border: { width: 0 } }}  
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}  
        tooltip={{ enable: true }} 
      >
        {/* Inject services as an array */}
        <Inject services={[SplineAreaSeries, DateTime, Legend]} />
        
        {/* Series Collection */}
        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />  
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Area;
