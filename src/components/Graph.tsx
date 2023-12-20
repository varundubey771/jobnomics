"use client";
import { useEffect, useState } from "react";
import { api } from "~/utils/api";
import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition, Switch } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  Chart.defaults.color = '#ffffff'



  type objectt = {
    count: number;
    country: string;
    timestamp: Date
    createdAt:Date 
    title:string
    [key: string]: any
  };

type DataArr=objectt[]|undefined


  export const options = {
    tooltip: {
        position: 'average', // Display the tooltip in a column layout
      },
    height:400,
    maintainAspectRatio : false,
    plugins: {
      legend: {

      },

      xAxes:{
        labels:{
            color:'white'
        }
      }
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

export const data1 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
        label: 'Dataset 3',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(56, 152, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
  ],
};


const processArray= (array:DataArr)=>{

if(array && array[0]){
const columns=Object.keys(array[0])

const columnArray: { [key: string]: (number | string | Date|void)[] } = {}
columns.forEach(column=>{
    columnArray[column]=array.map(item=>{
        return item[column]
    })
})
let dateArray: (string|undefined)[] =[]
if(columnArray['timestamp']){
dateArray = columnArray['timestamp'].map((timestamp) => {
    // Get the date part in 'YYYY-MM-DD' format
    if(timestamp instanceof Date){
    const datePart: string|undefined = timestamp.toISOString().split('T')[0];
    return datePart;}
  });
}

console.log(dateArray)
const originalArray = dateArray
const uniqueArray = [...new Set(originalArray)];
console.log(uniqueArray.length); // [1, 2, 3, 4, 5]


return columnArray
}    

}


const Graph = () => {
    useEffect(() => {
        const init = async () => {
          const { Datepicker, Input, initTE, Dropdown } = await import("tw-elements");
          initTE({ Datepicker, Input, Dropdown });
        };
        init();
      }, []);

    const menuItems = ['Ireland', 'India', 'Germany', 'United States','United Kingdom','Australia'];

    // Initialize state to store the checked items
    const [checkedItems, setCheckedItems] = useState<string[]>([]);
    const [isDropDownActive, setIsDropDownActive] = useState<boolean>(true);
    const [enabled, setEnabled] = useState(false)
    const {data,isLoading,isError}=api.jobcount.getAllData.useQuery()
    const processedData=processArray(data)
    console.log(processedData)

    const setDropDownStatus =()=>{
        const varibale = isDropDownActive
        setIsDropDownActive(!varibale)
    }
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const itemName = event.target.value;
        if (event.target.checked) {
          // Add the checked item to the state
          setCheckedItems([...checkedItems, itemName]);
        } else {
          // Remove the unchecked item from the state
          setCheckedItems(checkedItems.filter((item) => item !== itemName));
        }
        console.log(checkedItems)
      };

    
//     const {data,isLoading,isError}=api.jobcount.getAllData.useQuery()
// if (isLoading){
//     return <div>is Loading</div>
// }
// if(isError){
//     return <div>is Error</div>
// }

return (
    <div className="h-[50vh] w-full">
        <div className="flex flex-row">
            <div> 
            <div className="relative sm:w-1/8" data-te-dropdown-ref>
  <button
    className="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    type="button"
    id="dropdownMenuButton1"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
    Dropdown button
    <span className="ml-2 w-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5">
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clipRule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1"
    data-te-dropdown-menu-ref>
      {menuItems.map((item)=>(
            <li key={item}>
            <a
              className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
              href="#"
              data-te-dropdown-item-ref
              >
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
        <input
          className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="checkbox"
          value={item}
          checked={checkedItems.includes(item)}
          onChange={(event) => {
            event.stopPropagation();
            handleCheckboxChange(event);
          }}
          id="checkboxDefault" />
        <label
          className="inline-block pl-[0.15rem] hover:cursor-pointer"
          htmlFor="checkboxDefault">
          {item}
        </label>
      </div>
      </a>
          </li>
      ))}
  </ul>
</div>
     </div>

    {/* <div className="flex">
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items  className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {menuItems.map(item=>(
                            <Menu.Item key={item}>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
            <div className="px-4 py-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-indigo-600"
                  value={item}
                  checked={checkedItems.includes(item)}
                  onChange={(event) => {
                    event.stopPropagation();
                    handleCheckboxChange(event);
                  }}
                />
                <span>{item}</span>
              </label>
            </div>
                              </a>
                            )}
                          </Menu.Item>
            ))}
          </div>

        </Menu.Items>
      </Transition>
    </Menu>
    </div> */}
    </div>
<div className="h-full w-100">
    <Line options={options} data={data1}/>
    </div></div>)


}
 
export default Graph;