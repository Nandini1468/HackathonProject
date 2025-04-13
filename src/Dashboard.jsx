import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const [progressData, setProgressData] = useState([]);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const token = localStorage.getItem("token");
        const {roadmapId} = useParams();
      const response = await axios.get(`http://localhost:3000/api/v1/roadmap/${roadmapId}`, {
          headers: {
            "authorization": token,
          },
        });
        setProgressData(response.data.roadmap?.progress || []);
      } catch (err) {
        console.error("Error fetching progress:", err);
      }
    };

    fetchProgress();
  }, []);

  return (
    <>
      <Navbar />
      <div className="dark:bg-gray-800 h-screen text-white">
        <h2 className="text-3xl font-bold text-center pt-10 text-gray-900 dark:text-white">
          Your Learning Progress
        </h2>

        <div className="mt-8 overflow-x-auto px-6">
          {progressData.length === 0 ? (
            <p className="text-center text-gray-300 mt-10">
              No progress found or still loading...
            </p>
          ) : (
            <div className="flex space-x-6 w-max justify-center items-center ">
              {progressData.map((item, index) => {
                let bgColor = "bg-gray-600"; // Default: Locked
                let isLocked = true;

                if (item.status === "complete") {
                  bgColor = "bg-green-500";
                  isLocked = false;
                } else if (item.status === "current") {
                  bgColor = "bg-blue-500";
                  isLocked = false;
                }

                return (
                  <div
                    key={index}
                    className="{min-w-[300px] h-48 p-4 rounded-xl shadow-lg text-white ${bgColor} flex flex-col justify-center items-center transition duration-300}"
                  >
                    <h3 className="text-xl font-bold mb-2">Level {index + 1}</h3>
                    <p>{item.title || "Placeholder Title"}</p>
                    {isLocked && (
                      <span className="mt-4 text-sm text-gray-200 italic">
                        Locked 🔒
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;