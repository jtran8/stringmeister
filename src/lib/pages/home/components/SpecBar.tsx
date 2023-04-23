import { Text } from "@chakra-ui/react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

interface Props {
  cat: any;
  rating: any;
}

const SpecBar = ({ cat, rating }: Props) => {
  return (
    <Text>{rating.toFixed(1)} / 10</Text>
    // <ResponsiveContainer width="100%" height={20}>
    //   <BarChart data={stats} layout="vertical">
    //     <Bar dataKey={stats[0]} fill="#8884d8" />
    //   </BarChart>
    // </ResponsiveContainer>
  );
};

export default SpecBar;
