import React from "react";
import Recommendation from "./Recommendation";
import "../styles/Recommendations.css";

function Recommendations(props) {
  const { data } = props;
  console.log(data);

  const {
    electric,
    gas,
    flights,
    recycle,
    electricSource,
    vehicleType,
    totalCarbon,
  } = data;
  console.log(electric);
  console.log(gas);

  const electricPercentage = electric / totalCarbon;
  const gasPercentage = gas / totalCarbon;
  const flightPercentage = flights / totalCarbon;
  const createRecommendations = () => {
    const recommendations = [];

    switch (electricSource) {
      case "renewable":
        recommendations.push("renewable");
        break;
      case "coal":
        recommendations.push("coal");
        break;
      case "petroleum":
        recommendations.push("petroleum");
        break;
      case "naturalGas":
        recommendations.push("naturalGas");
        break;
      case "dontKnow":
        recommendations.push("dontKnow");
        break;
    }

    switch (vehicleType) {
      case "gas":
        recommendations.push("gas");
        break;
      case "hybrid":
        recommendations.push("hybrid");
        break;
      case "electric":
        recommendations.push("electric");
        break;
    }

    if (electricPercentage > 0.5) {
      recommendations.push("electricPercentage");
    }

    if (gasPercentage > 0.3) {
      recommendations.push("gasPercentage");
    }

    if (flightPercentage > 0.25) {
      recommendations.push("flightPercentage");
    }

    if (recycle !== 0) {
      recommendations.push("recycle");
    }

    return recommendations;
  };

  const recommendations = createRecommendations();
  console.log("recommendations", recommendations);
  return (
    <div className="recommendation-container">
      {recommendations.length > 0 ? (
        recommendations.map((recommendationKey, index) => (
          <Recommendation
            key={`${recommendationKey}-${index}`}
            recommendationKey={recommendationKey}
          />
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}

export default Recommendations;
