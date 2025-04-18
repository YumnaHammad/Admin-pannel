import {
    BarChart as RechartsBarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from 'recharts';
  
  const BarChart = () => {
    const data = [
      { name: 'Page A', uv: 400 },
      { name: 'Page B', uv: 300 },
      { name: 'Page C', uv: 200 },
    ];
  
    return (
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, bottom: 5 }}
        >
          <CartesianGrid stroke="#eee" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" fill="#8884d8" />
        </RechartsBarChart>
      </ResponsiveContainer>
    );
  };
  
  export default BarChart;
  