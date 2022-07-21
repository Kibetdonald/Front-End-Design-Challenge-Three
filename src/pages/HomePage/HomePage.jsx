import React from "react";
import FirstSection from "../../components/FirstSection/FirstSection";
import Navbar from "../../components/Navbar/Navbar";
import background from "../../Assets/Images/background.jpg";
import "./HomePage.scss";

export default function HomePage() {
  return (
    <div class="PageContainer">
      <img src={background} alt="banner" className="BackgroundImage" />
      <Navbar />
      <FirstSection />
    </div>
  );
}
