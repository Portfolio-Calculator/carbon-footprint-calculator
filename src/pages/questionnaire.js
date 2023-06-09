import { useState } from "react";
import { useRouter } from "next/router";
import "../styles/questionnaire.css";
import questions from "../api/questions";

const QuestionnairePage = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [questionnaireData, setQuestionnaireData] = useState({
    gasBill: "",
    electricBill: "",
    recycle: false,
    carMileage: "",
    flightsUnder4Hours: "",
    flightsOver4Hours: "",
    vehicleType:"gas",
    electricSource:"renewable",
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let newValue = value;

    if (type === "text") {
      if (
        name === "carMileage" ||
        name === "gasBill" ||
        name === "electricBill"
      ) {
        // Allow only numeric and decimal values
        newValue = value.replace(/[^0-9.]/g, "");
      } else if (
        name === "flightsUnder4Hours" ||
        name === "flightsOver4Hours"
      ) {
        // Allow only numeric values
        newValue = value.replace(/[^0-9]/g, "");
      }
    }

    if (type === "checkbox") {
      newValue = checked;
    }

    setQuestionnaireData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const unansweredQuestions = Object.keys(questionnaireData).filter(
      (key) => questionnaireData[key] === ""
    );

    if (unansweredQuestions.length > 0) {
      setShowPopup(true);
      return;
    }

    // Set default value to 0 for fields with empty values
    const updatedQuestionnaireData = {
      ...questionnaireData,
      gasBill: questionnaireData.gasBill || 0,
      electricBill: questionnaireData.electricBill || 0,
      carMileage: questionnaireData.carMileage || 0,
      flightsUnder4Hours: questionnaireData.flightsUnder4Hours || 0,
      flightsOver4Hours: questionnaireData.flightsOver4Hours || 0,
    };

    // Redirect to the result page with the questionnaire data
    router.push({
      pathname: "/result",
      query: updatedQuestionnaireData,
    });
    // Set isFormSubmitted to true after form submission
    setFormSubmitted(true);
  };

  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(questionnaireData).filter(
    (key) => questionnaireData[key] !== ""
  ).length;
  const progressPercentage = (answeredQuestions / totalQuestions) * 100;

  return (
    <div className="container">
      <div className="snow"></div>
      <h1 className="title">Carbon Footprint Questionnaire</h1>

      <div className="progress-bar">
        <div
          className={`progress ${isFormSubmitted ? "animation" : ""}`}
          style={{ width: `${progressPercentage}%` }}
        ></div>

        <div
          className="progress"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
          {questions
            .slice(0, Math.ceil(questions.length / 2))
            .map((question) => (
              <div className="question" key={question.id}>
                <div className="question-row">
                  {question.icon && (
                    <img
                      src={question.icon}
                      alt={`${question.label} icon`}
                      className="question-icon"
                    />
                  )}
                  <label htmlFor={question.id}>{question.label}</label>
                </div>
                {question.type === "select" ? (
                  <select
                    className="question-select"
                    id={question.id}
                    name={question.id}
                    value={questionnaireData[question.id]}
                    onChange={handleInputChange}
                  >
                    {question.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="input-container">
                    <input
                      type={question.type}
                      id={question.id}
                      name={question.id}
                      value={questionnaireData[question.id]}
                      onChange={handleInputChange}
                    />
                    {question.unit && (
                      <span className="unit">{question.unit}</span>
                    )}
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="form-column">
          {questions.slice(Math.ceil(questions.length / 2)).map((question) => (
            <div className="question" key={question.id}>
              <div className="question-row">
                {question.icon && (
                  <img
                    src={question.icon}
                    alt={`${question.label} icon`}
                    className="question-icon"
                  />
                )}
                <label htmlFor={question.id}>{question.label}</label>
              </div>
              {question.type === "select" ? (
                <select
                  className="question-select"
                  id={question.id}
                  name={question.id}
                  value={questionnaireData[question.id]}
                  onChange={handleInputChange}
                >
                  {question.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <div className="input-container">
                  <input
                    type={question.type}
                    id={question.id}
                    name={question.id}
                    value={questionnaireData[question.id]}
                    onChange={handleInputChange}
                  />
                  {question.unit && (
                    <span className="unit">{question.unit}</span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="buttonContainer">
          <button type="submit" className="calculate-button">
            Calculate
          </button>
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-content">
              <p>Please complete all the questions before submitting.</p>
              <button onClick={() => setShowPopup(false)}>OK</button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionnairePage;
