import React from "react";
import { Base } from "./Base";
const Dashboard = ({ children }) => {
  return (
    <Base>
      <div className="dashboard" style={{background: 'linear-gradient(to bottom, #7F7FD5, #86A8E7, #91EAE4)'}}>
      <h1>ADMIN DASHBOARD TO IMPLEMENT THE CRUD WITH STUDENT & TEACHER MANAGEMENT</h1>
         
      <img
          src="https://a-static.besthdwallpaper.com/gray-and-black-3d-cubism-digital-art-wallpaper-3200x1200-82664_90.jpg"
          alt="background image"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="main-content">
          
         
                
        </div>
      </div>
    </Base>
  );
};

export default Dashboard;
