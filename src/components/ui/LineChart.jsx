
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



// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: false, text: "Users Growth" },
  },
};

const LineChart = (props) => {
  // Chart data
const data = {
  labels: props.labels,
  datasets: [
    {label:"daily Login",
      data: props.data,
      borderColor: "#38BDF8",
      backgroundColor: "#38BDF8",
      tension: 0.4
    },
  ],
};
  return (
    <div className="w-full h-full ">
      <Line  data={data} options={options} />
    </div>
  );
};

export default LineChart;
