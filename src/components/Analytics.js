import React from 'react';
import ChartComponent from './ChartComponent'; // Assuming ChartComponent is in a separate file
import './Analytics.css'

function Analytics() {
  // Sample data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Food Donations',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Analytics</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <ChartComponent data={data} options={options} />
      </div>
    </div>
  );
}

export default Analytics;
