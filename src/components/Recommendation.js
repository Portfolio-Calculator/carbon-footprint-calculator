import React from "react";
import { useState } from "react";
import { recommendationJson } from "../../public/recommendationJson";

function Recommendation(props) {
  const { titleProp } = props;
  const [title, setTitle] = useState(titleProp);

  const matchingRecommendation = recommendationJson.find(
    (recommendation) => recommendation.title === title
  );

  const decsription = matchingRecommendation
    ? matchingRecommendation.description
    : "An invalid recommendation was requested.";

  return (
    <div className="flex flex-col items-center justify-center h-90vh">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p>{decsription}</p>
    </div>
  );
}

export default Recommendation;
