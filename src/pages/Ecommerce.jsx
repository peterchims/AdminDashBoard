import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';  // or GoDotFill

// Ensure these paths and filenames are correct and match your actual directory structure

import { Line } from '../component/Charts/Line';
import { Pie } from '../component/Charts/Pie';
import Button from '../component/Button';
import SparkedLine from '../component/Charts/SparkedLine';

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContentProvider';
import { Stacked } from './Index';





const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-red dark:text-green-200 dark:bg-secondary-dark-bg 
        h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat
        bg-cover bg-center'>
      <div className="flex justify-between items-center">
<div>
  <p className='font-bold text-yellow-500'>Earnings</p>
  <p className='text-2xl'>$63,448.78</p>

</div>
      </div>
      <div className="mt-6">
        <Button 
        color="white"
        bgColor="blue"
        text="Download"
        borderRadius="10px"
        size="md"
        />
      </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
  {earningData.map((item) => {
    return (
      <div
        key={item.title}
        className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
      >
        <button
          type='button'
          style={{ color: item.iconColor, backgroundColor: item.iconBg }}
          className='text-2xl opacity-0.9  rounded-full p-4 hover:drop-shadow-xl'
        >
          {item.icon}
        </button>
        <p className='mt-3'>
          <span className='text-lg font-semibold'>
{item.amount}
          </span>
          <span className={`text-sm text-${item.pcColor} ml-2`}>{item.percentage}</span>
        </p>
        <p className='text-sm text-gray-400 mt-1'>{item.title}</p>
      </div>
    );
  })}
</div>
      </div>
    <div className='flex gap-10 flex-wrap justify-center' >
<div className="bg-white dark:text-gray-200 dark:bg-secondary-bg m-3 p-4
rounded-2xl md:w-780">
<div className="flex justify-between">
  <p className='font-semibold text-xl text-red-500'>Revenue Updates</p>
  <div className="flex items-center gap-4">
   <p className='flex items-center gap-2 text-green-500 hover:drop-shadow-xl'>
    <span > { <GoDotFill /> }</span>
    <span>Expense </span>
   </p>
   <p className='flex items-center gap-2 text-purple-200 hover:drop-shadow-xl'>
    <span > { <GoDotFill /> }</span>
    <span> Budget  </span>
   </p>
  </div>
</div>
<div className="mt-10 flex gap-6 flex-wrap justify-center">
  <div className="border-r-1 border-color m-4 pr-10">
    <div>
      <p>
        <span className='text-3xl font-semibold text-pink-600'>$56,890 </span>
        <span className='p-1.5 hover:drop-shadow-xl text-white bg-green-400
        cursor-pointer rounded-full ml-3 text-xs'>$50%</span>
        </p>
        <p className='text-gray-500 mt-1'>
        BUDGET
        </p>
    </div>
    <div className='mt-8'>
      <p>
        <span className='text-3xl font-semibold text-pink-600'>$36,890 </span>
        
        </p>
        <p className='text-gray-500 mt-1'>
     Expense
        </p>
    </div>
    <div className="mt-5">
      <SparkedLine 
      currentColor="blue"
      id="line-sparkline"
      type="Line"
      height="80px"
      width="250px"
      data={SparklineAreaData}
      color="blue "
      />
    </div>
    <div className="mt-10">
      <Button 
      color="white"
      bgColor="blue"
      text="Download Report"
      borderRadius="10px"
      />
    </div>
  </div>
  <div>
    <Stacked 
    width="320px"
    height="360px"
    
    />
  </div>
</div>
</div>
    </div>
    </div>
  );
}

export default Ecommerce;
