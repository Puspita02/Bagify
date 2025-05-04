import React, { useEffect, useState } from "react";
import useAxios from "../../utils/axiosInstance";

const Dashboard = () => {
  const axios = useAxios();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get("/protected"); // replace with your API
        setUserData(response.data);
      } catch (err) {
        console.error("Failed to fetch protected data:", err);
      }
    };

    fetchProtectedData();
  }, [axios]);

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      {userData ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          <p>Email: {userData.email}</p>
          {/* Add more user info or features here */}
        </div>
      ) : (
        <p>Loading your info...</p>
      )}
    </div>
  );
};

export default Dashboard;
