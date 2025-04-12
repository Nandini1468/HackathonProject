import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Dashboard = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8080/api/v1/roadmap", {
          headers: {
            Authorization: token,
          },
        });
        setProgressData(response.data.progress || []);
      } catch (err) {
        console.error("Error fetching progress:", err);
      }
    };

    fetchProgress();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-white">
      <Navbar />
      <h2 className="text-3xl font-bold text-center mt-10 text-gray-900 dark:text-white">
        Your Learning Progress
      </h2>

      <div className="mt-8 overflow-x-auto px-6">
        <div className="flex space-x-6 w-max">
          {progressData.map((item, index) => {
            let bgColor = "bg-gray-600"; // Default: Locked
            let isLocked = true;

            if (index === 0) {
              bgColor = "bg-green-500"; // Completed
              isLocked = false;
            } else if (index === 1) {
              bgColor = "bg-blue-500"; // Active
              isLocked = false;
            }

            return (
              <div
                key={index}
                className={`min-w-[300px] h-48 p-4 rounded-xl shadow-lg text-white ${bgColor} flex flex-col justify-center items-center transition duration-300`}
              >
                <h3 className="text-xl font-bold mb-2">Level {index + 1}</h3>
                <p>{item.title || "Placeholder Title"}</p>
                {isLocked && (
                  <span className="mt-4 text-sm text-gray-200 italic">Locked 🔒</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
