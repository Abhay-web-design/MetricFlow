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



// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: { display: false, text: "Feature Usage" },
  },
};

export default function App({label,value}) {

  // Chart data
const data = {
  labels:label,
  datasets: [
    {
      label: "",
      data: value,
      backgroundColor: "#38BDF8",
      borderRadius: 6,
    }
  ],
  
};
  return (
    <div className="w-full">
      <Bar data={data} options={options} />
    </div>
  );
}
