import { Text } from "@chakra-ui/react";
// import {
//   BarChart,
//   Bar,
//   CartesianGrid,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
// } from "recharts";

interface Props {
  cat: any;
  rating: any;
}

const colorPicker = (value: number | string) => {
  let color = "";
  if (value >= 9 || value === "Hi") color = "#50cd89";
  else if (value >= 7 || value === "Mid") color = "#009ef7";
  else if (value >= 5 || value === "Low") color = "#f6b26b";
  else color = "#f1416c";
  return color;
};

const SpecBar = ({ cat, rating }: Props) => {
  // const graphData = [{ name: "string", rating: rating[cat] }];

  return (
    <Text fontWeight="black" color={colorPicker(rating[cat])}>
      {rating[cat]}
    </Text>
    // <ResponsiveContainer width="100%" height={20}>
    //   <BarChart
    //     data={graphData}
    //     layout="vertical"
    //     margin={{ top: 20, right: 5, left: -35, bottom: -10 }}
    //   >
    //     <CartesianGrid strokeDasharray="3 3" />
    //     <XAxis type="number" tick={false} axisLine={false} domain={[0, 10]} />
    //     <YAxis type="category" dataKey="name" tick={false} axisLine={false} />
    //     <Bar
    //       dataKey="rating"
    //       fill="#1111111"
    //       background={{ fill: "#eee" }}
    //       label={{ position: "left" }}
    //     />
    //   </BarChart>
    // </ResponsiveContainer>
  );
};

export default SpecBar;
