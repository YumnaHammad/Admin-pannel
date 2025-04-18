import {
    LineChart as RechartsLineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from 'recharts';
  

  const LineChart = () => {
    const data = [
      { name: 'Page A', uv: 400,  },
      { name: 'Page B', uv: 300 },
      { name: 'Page C', uv: 200 },
    ];
  
    return (
      <ResponsiveContainer width="100%" height="60%">
        <RechartsLineChart data={data}  margin={{ top: 20, bottom: 5 , left:0}}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid stroke="#eee" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </RechartsLineChart>
      </ResponsiveContainer>
    );
  };
  
  export default LineChart;
  