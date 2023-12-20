import React from 'react';
// import { ResponsiveLine } from '@nivo/line';
import dynamic from "next/dynamic";

const ResponsiveLine = dynamic(() => import("@nivo/line").then(m => m.ResponsiveLine), { ssr: false });
const data = [
    {
      id: 'Series 1',
      data: [
        { x: '2022-01-01', y: 10 },
        { x: '2022-01-02', y: 15 },
        { x: '2022-01-03', y: 12 },
        { x: '2022-01-04', y: 18 },
        // Add more data points for Series 1
      ],
    },
    {
      id: 'Series 2',
      data: [
        { x: '2022-01-01', y: 8 },
        { x: '2022-01-02', y: 13 },
        { x: '2022-01-03', y: 10 },
        { x: '2022-01-04', y: 16 },
        // Add more data points for Series 2
      ],
    },
    // Add more series with data as needed
  ];
  const chartColors = ['#007BFF', '#FF4500', '#00C49F']; // Custom color scheme 
  // Usage of the MultiLineGraph component with the sample data
  
const MultiLineGraph = () => {

  return (
    <div className="h-[50vh] w-full">
<ResponsiveLine
  data={data}
  margin={{ top: 40, right: 40, bottom: 70, left: 70 }}
  xScale={{ type: 'time', format: '%Y-%m-%d', useUTC: false }}
  yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
  curve="monotoneX" // Use a smooth curve for the line
  axisTop={null}
  axisRight={null}
  axisBottom={{
    format: '%b %d',
    tickValues: 'every 2 days',
    tickRotation: -45,
    legend: 'Time',
    legendOffset: 36,
    legendPosition: 'middle',
  }}
  axisLeft={{
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Value',
    legendOffset: -40,
    legendPosition: 'middle',
  }}
  colors={chartColors} // Use the custom color scheme
  lineWidth={2} // Increase line thickness
  enableGridX={false} // Disable horizontal grid lines
  enableGridY={true} // Enable vertical grid lines
  gridYValues={[0, 5, 10]} // Customize vertical grid lines
  pointSize={8}
  pointColor={{ from: 'color', modifiers: [] }} // Use data point colors from the color scheme
  pointBorderWidth={2}
  pointBorderColor={{ from: 'color', modifiers: [] }}
  pointLabelYOffset={-12}
  useMesh={true}
  legends={[
    {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
    },
  ]}
  theme={{
    fontFamily: 'Arial, sans-serif',
    textColor: 'white',
    tooltip: {
      container: {
        background: 'rgba(0, 0, 0, 0.7)',
      },
    },
  }}
/>

      {/* <ResponsiveLine
        data={data}
        margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
        xScale={{ type: 'time', format: '%Y-%m-%d', useUTC: false }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          format: '%b %d', // Customize date format on x-axis
          tickValues: 'every 2 days', // Show ticks every 2 days
          tickRotation: -45, // Rotate x-axis labels for better readability
          legend: 'Time',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Value',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'category10' }} // Choose a color scheme
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
          },
        ]}
        theme={{
          fontFamily: 'Arial, sans-serif',
          textColor: 'white',
          tooltip: {
            container: {
              background: 'rgba(0, 0, 0, 0.7)',
            },
          },
        }}
      /> */}
    </div>
  );
};

export default MultiLineGraph;
