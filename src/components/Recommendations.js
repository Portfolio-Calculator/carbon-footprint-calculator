import React from "react";
import Recommendation from "./Recommendation";

function Recommendations(props) {
  const { data } = props;
  console.log(data);

  const { electric, gas, car, shortFlights, longFlights, recycle } = data;
  console.log(electric);
  console.log(gas);

  const totalCarbon = electric + gas + car + shortFlights + longFlights;
  const electricPercentage = electric / totalCarbon;
  const gasPercentage = gas / totalCarbon;
  const carPercentage = car / totalCarbon;
  const shortFlightPercentage = shortFlights / totalCarbon;
  const longFlightPercentage = longFlights / totalCarbon;

  const createRecommendations = () => {
    const recommendations = [];

    if (recommendations.length < 3 && carPercentage > 0.3) {
      recommendations.push("Improve Fuel Efficiency");
    }

    if (recommendations.length < 3 && recycle === 350) {
      recommendations.push("Start Recycling Consistently");
    }

    return recommendations;
  };

  const recommendations = createRecommendations();
  console.log(carPercentage);
  return (
    <div>
      {recommendations.length > 0 ? (
        recommendations.map((recommendation, index) => (
          <Recommendation key={index} titleProp={recommendation} />
        ))
      ) : (
        <p>No recommendations available.</p>
      )}
    </div>
  );
}

export default Recommendations;
