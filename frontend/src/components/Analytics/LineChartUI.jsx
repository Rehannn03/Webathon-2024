/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    HepA: 4000,
    HepB: 2400,
    infected: 2400,
  },
  {
    name: 'February',
    HepA: 3000,
    HepB: 1398,
    infected: 2210,
  },
  {
    name: 'March',
    HepA: 2000,
    HepB: 9800,
    infected: 2290,
  },
  {
    name: 'April',
    HepA: 2780,
    HepB: 3908,
    infected: 2000,
  },
  {
    name: 'May',
    HepA: 1890,
    HepB: 4800,
    infected: 2181,
  },
  {
    name: 'June',
    HepA: 2390,
    HepB: 3800,
    infected: 2500,
  },
  {
    name: 'July',
    HepA: 3490,
    HepB: 4300,
    infected: 2100,
  },
  {
    name: 'August',
    HepA: 0,
    HepB: 0,
    infected: 0,
  },
  {
    name: 'September',
    HepA: 0,
    HepB: 0,
    infected: 0,
  },
  {
    name: 'October',
    HepA: 0,
    HepB: 0,
    infected: 0,
  },
  {
    name: 'November',
    HepA: 0,
    HepB: 0,
    infected: 0,
  },
  {
    name: 'December',
    HepA: 0,
    HepB: 0,
    infected: 0,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
          {payload.value}
        </text>
      </g>
    );
  }
}

class LineChartUI extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-with-customized-label-d6rytv';

  render() {
    return (
      <div className='max-h-screen'>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="HepB" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="HepA" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }
}

export default LineChartUI;