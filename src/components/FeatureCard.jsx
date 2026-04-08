import React from 'react'
import "./FeatureCard.css"
const FeatureCard = ({title,subtitle}) => {
    const words = title.split(" ");

  return (
<div className="FeatureCard">
  <div className="FeatureCard-container">
   
      <h3 className="FeatureCard-title">
         <span className="word1">{words[0]}</span>{" "}
      <span className="word2">{words[1]}

      </span>
      </h3>
      <p className="FeatureCard-subtitle">{subtitle}</p>
    
  </div>
</div>
  )
}

export default FeatureCard
