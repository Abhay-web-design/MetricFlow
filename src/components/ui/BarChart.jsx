import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart data
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales1",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "#38BDF8",
    },
     {
      label: "Sales2",
      data: [23, 5, 8, 26, 15, 30],
      backgroundColor: "#22C55E",
    },
    {
      label: "Sales3",
      data: [12, 19, 33, 20, 22, 12],
      backgroundColor: "#64748B",
    },
  ],
  
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: false, text: "Feature Usage" },
  },
};

export default function App() {
  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
