import React from 'react'
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject,
  Legend, 
  Category , 
  StackingColumnSeries,
  Tooltip
 } from '@syncfusion/ej2-react-charts'
import  { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis}  from '../../data/dummy';
const Stacked = ({ width , height}) => {
  return (
    <div>
  <ChartComponent
  width={width}
  height={height}
id='stack chart'
primaryXAxis={stackedPrimaryXAxis}
primaryYAxis={stackedPrimaryYAxis}
chartArea={{border:{width:90}}}
tooltip={{enable:true}}
legendSettings={{background: 'white'}}
  >
    <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
    <SeriesCollectionDirective>
    {stackedCustomSeries.map((item, index) => (
  <SeriesDirective key={index} {...item} />
))}

    </SeriesCollectionDirective>
  </ChartComponent>
    </div>
  )
}

export default Stacked
