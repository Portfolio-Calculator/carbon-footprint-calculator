import React from "react";
import { recommendationJson } from "../../public/recommendationJson";
import "../styles/Recommendation.css";

function Recommendation(props) {
  const { recommendationKey } = props;
  const { title, description } = recommendationJson[recommendationKey];
  return (
    <div>
      <h1 className="recommendation-title">{title}</h1>
      <p className="recommendation-description">{description}</p>
    </div>
  );
}

export default Recommendation;
