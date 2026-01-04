
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
  labels: ["January", "February", "March", "April", "May", "June","July","August","Septemper","October","November","December"],
  datasets: [
    {
      label: "Sales",
      data: [ 3000, 5520, 2800, 1002,1500,5800,4851,8920,10000,1520,8204,7893],
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
    <div className="w-full">
      <Line  data={data} options={options} />
    </div>
  );
};

export default LineChart;
