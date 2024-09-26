import React from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from 'react-icons/go';  // or GoDotFill

// Ensure these paths and filenames are correct and match your actual directory structure

import { Line } from '../component/Charts/Line';
import { Pie } from '../component/Charts/Pie';
import Button from '../component/Button';
import { SparkedLine } from '../component/Charts/SparkedLine';  // Ensure the file exists as SparkedLine.jsx or adjust the name

import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy'
import { useStateContext } from '../contexts/ContentProvider';





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
  </div>
</div>
</div>
    </div>
    </div>
  );
}

export default Ecommerce;
