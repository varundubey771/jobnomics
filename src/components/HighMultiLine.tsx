import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

Highcharts.theme = {
  chart: {
    backgroundColor: '#333',
    style: {
      fontFamily: 'Arial, sans-serif',
    },
  },
  colors: ['#7cb5ec', '#f45b5b', '#90ed7d', '#f7a35c', '#8085e9', '#2b908f'],
};

Highcharts.setOptions(Highcharts.theme);

const MultiLineChart: React.FC = () => {

  // Sample data
  const chartData: Highcharts.SeriesOptionsType[] = [
    {
      type: 'spline', // Specify the type of the series
      name: 'Line 1',
      data: [
        [Date.UTC(2023, 0, 1), 10],
        [Date.UTC(2023, 1, 1), 15],
        [Date.UTC(2023, 2, 1), 12],
        // Add more data points as needed
      ],
    },
    {
      type: 'spline', // Specify the type of the series
      name: 'Line 2',
      data: [
        [Date.UTC(2023, 0, 1), 5],
        [Date.UTC(2023, 1, 1), 8],
        [Date.UTC(2023, 2, 1), 6],
        // Add more data points as needed
      ],
    },
    // Add more series as needed (up to 6)
  ];

  // Chart configuration
// Inside your MultiLineChart component
const chartOptions: Highcharts.Options = {
    chart: {
      type: 'line', // Use 'line' type for straight lines
      height: '100%', // Ensure the chart takes up the full container height
      styledMode: true, // Enable dark mode
    },
    title: {
      text: 'Multi-Line Chart',
      style: {
        color: '#fff', // Title text color
      },
    },
    xAxis: {
      type: 'datetime', // Set the x-axis to display dates
      labels: {
        style: {
          color: '#fff', // X-axis label text color
        },
      },
    },
    yAxis: {
      title: {
        text: 'Y-Axis Title',
        style: {
          color: '#fff', // Y-axis title text color
        },
      },
      labels: {
        style: {
          color: '#fff', // Y-axis label text color
        },
      },
    },
    plotOptions: {
      series: {
        lineWidth: 2, // Adjust line width for straighter lines
      },
    },
    series: chartData,
  
    // Responsive configuration
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500, // Adjust this value based on your mobile design needs
          },
          chartOptions: {
            chart: {
              height: '70%', // Adjust chart height for mobile screens
            },
            xAxis: {
              labels: {
                style: {
                  fontSize: '12px', // Adjust font size for x-axis labels on mobile
                },
              },
            },
          },
        },
      ],
    },
  };
  

  return (
    <div className="multiline-chart">
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default MultiLineChart;
