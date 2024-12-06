// src/App.js
import React from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line, Bar, Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { LuHotel } from "react-icons/lu";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineHomeWork, MdEventAvailable } from "react-icons/md";
import { TbReservedLine } from "react-icons/tb";
import { CiNoWaitingSign } from "react-icons/ci";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDeshbord = () => {
  const revenueData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Revenue",
        data: [
          1500000, 2000000, 1800000, 2200000, 1700000, 2500000, 2300000,
          2400000, 2100000, 2600000, 2800000, 3000000,
        ],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const bookingsData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Bookings",
        data: [50, 60, 55, 70, 65, 75, 80],
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4,
      },
    ],
  };
  
  const doughnutData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Daily Revenue",
        data: [1200, 1900, 800, 1600, 2000, 2400, 3000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(199, 199, 199, 0.6)"
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)"
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    cutout: '90%',
  };  

   console.log("aavi goyo")

  return (
    <div className="min-h-screen bg-gray-100 p-5 border-2 mt-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
          <div className=" flex flex-col  items-start  border-2 bg-white p-4 shadow rounded-lg w-full  ">
            <h2 className="text-xl font-semibold mb-6">Hotel Details</h2>
            <div className="flex items-center justify-between gap-x-20 mx-auto">
              <div className="flex items-center justify-between w-full flex-col">
                <LuHotel size={30} color="blue" />
                <p className="text-xl">Hotels</p>
                <p className="text-xl">15</p>
              </div>
              <div className="flex items-center flex-col">
                <VscAccount size={30} color="blue" />
                <Link to="/ownerdetails" className="text-xl">Owner</Link>
                <p className="text-xl">15</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 shadow rounded-lg ml-[200px] w-[500px]">
            <h2 className="text-xl font-semibold mb-6 ml-[30px]">Available Rooms</h2>
            <div className="flex gap-x-8">
              <div className="text-center ml-[30px]">
                <MdOutlineHomeWork size={30} color="blue" />
                <p className="text-xl">Rooms</p>
                <p className="text-xl">80</p>
              </div>
              <div className="text-center">
                <MdEventAvailable size={30} color="blue" />
                <div className="text-xl">Available</div>
                <p className="text-xl">36</p>
              </div>
              <div className="text-center">
                <TbReservedLine size={30} color="blue" />
                <p className="text-xl">Occupied</p>
                <p className="text-xl">18</p>
              </div>
              <div className="text-center">
                <CiNoWaitingSign size={30} color="blue" />
                <div className="text-xl">Not Ready</div>
                <p className="text-xl">32</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Monthly Revenue</h2>
            <Bar data={revenueData} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Bookings Details</h2>
            <Line data={bookingsData} />
          </div>
          
              <div className="bg-white w-[400px]  h-[500px] ">
          <h2 className="text-2xl font-semibold ml-9 mt-1 text-center">Day-wise Revenue</h2>
          <Doughnut data={doughnutData} options={options} className="mt-4" /> 
         </div>
         
        </div>
      </div>
    </div>
  );
};

export default AdminDeshbord;