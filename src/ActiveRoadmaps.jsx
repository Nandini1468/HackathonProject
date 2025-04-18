import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const MyRoadmaps = () => {
  const [roadmaps, setRoadmaps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/api/v1/roadmaps", {
          headers: {
            "authorization": token,
          },
        });
        setRoadmaps(res.data);
      } catch (err) {
        console.error("Error fetching roadmaps", err);
      }
    };

    fetchRoadmaps();
  }, []);

  const goToDashboard = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <div>
      <Navbar />
      <div className="h-screen bg-gray-100 dark:bg-gray-800 p-6 dark:text-white text-gray-900">
        <h1 className="text-3xl font-bold mb-6 text-center">My Roadmaps</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {roadmaps.map((roadmap) => (
            <div
              key={roadmap.id}
              className="cursor-pointer bg-white dark:bg-gray-800 pl-3 mr-3"
              onClick={() => goToDashboard(roadmap.id)}
            >
              <h2 className="text-xl font-semibold mb-2">{roadmap.goal}</h2>
              <p className="text-sm text-gray-400">
              {/* //Content of the card */}
              </p>
            </div>
          ))}
        </div>
        {roadmaps.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No roadmaps generated yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default MyRoadmaps;
