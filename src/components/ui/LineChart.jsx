
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Chart data
const data = {
  labels: ["January", "February", "March", "April", "May", "June","July","August","Septemper","October","November","December","yoyoyoyo","aoudoiusoi","dsfsdfsdf","asdddqwd","qeqweda"],
  datasets: [
    {
      label: "Sales",
      data: [ 30000000, 5520, 2800, 1002,1500,5800,4851,8920,100646500,1520,82044644,7893,45454,4654446],
      borderColor: "#38BDF8",
      backgroundColor: "#38BDF8",
      tension: 0.4
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: false, text: "Users Growth" },
  },
};

const LineChart = () => {
  return (
    <div className="w-full h-full">
      <Line  data={data} options={options} />
    </div>
  );
};

export default LineChart;
