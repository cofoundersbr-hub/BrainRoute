import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import LoginModal from "../components/LoginModal";
import "./Home.css";

// Import images from assets
import neetImage from "../assets/neet-doctor.png";
import jeeImage from "../assets/jee-engineer.png";
import cuetImage from "../assets/cuet-student.png";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSignUp = () => {
    setIsModalOpen(true);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="home">
      {/* Navbar */}
      <Navbar onSignUpClick={handleSignUp} onLogoClick={handleLogoClick} />

      {/* Hero and Cards Unified Section */}
      <section className="main-container">
        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">Study Hub</h1>
            <p className="hero-text">We truly want you to succeed</p>
          </div>
          <div className="hero-right">
            <p className="hero-right-text">
              Choose your stream with <br></br>confidence
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="cards-container">
          <Card title="NEET" subtitle="The path of healing" image={neetImage} />
          <Card
            title="JEE Mains"
            subtitle="Engineer your future"
            image={jeeImage}
          />
          <Card
            title="CUET"
            subtitle="Unlimited possibilities"
            image={cuetImage}
          />
        </div>
      </section>

      {/* Login Modal */}
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <section className="features">
        <h1 className="feature-text">
          Important things to follow for better results
        </h1>
        <div className="FeatureCards-container">
          <FeatureCard
            title="Habit Builder"
            subtitle="The most important thing is 
to create and maintain good
habits and here you’ll learn
about habits"
          />
          <FeatureCard
            title="Write Blog"
            subtitle="Help others to get
information and let’s build a
community where
every one stays updated*"
          />
          <FeatureCard
            title="Edu community"
            subtitle="Connect with us in our
Discord & Whatsapp
community for group
discussions,regular tips
& improvement"
          />
          <FeatureCard
            title="Your Suggestions"
            subtitle="The most important thing is
to create and maintain good
habits and here you’ll learn
about habits"
          />
         
        </div>
      </section>
    </div>
  );
}
