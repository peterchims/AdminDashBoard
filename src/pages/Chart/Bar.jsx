import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  BarSeries, // Use BarSeries instead of SplineAreaSeries
  Legend,
  Category,  // Add Category for categorical X axis if needed
  Tooltip
} from '@syncfusion/ej2-react-charts';
import Header from '../../component/Header';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContentProvider';

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div>
      {/* Header for the chart */}
      <Header category="Chart" title="Bar Chart" />
      
      <ChartComponent
        id="bar-chart"
        height="400px"
        primaryXAxis={barPrimaryXAxis}  
        primaryYAxis={barPrimaryYAxis}  
        chartArea={{ border: { width: 0 } }}  
        background={currentMode === 'Dark' ? '#33373E' : '#fff'} 
        tooltip={{ enable: true }}  
      >
        {/* Inject necessary services for the Bar chart */}
        <Inject services={[BarSeries, DateTime, Legend, Tooltip, Category]} />
        
        {/* Series Collection for Bar chart */}
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} /> 
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Bar;

