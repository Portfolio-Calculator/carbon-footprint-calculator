import Link from "next/link";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="container">
      <div className="backgroundImage"></div>
      <div className="content">
        {/* <h1 className="welcometitle">Welcome to the Carbon Footprint Calculator!</h1> */}
        <p className="description">
          Take your first step towards a sustainable future.
        </p>
        <Link href="/questionnaire">
          <button className="calculateButton">
            <span className="buttonText">Calculate Your Carbon Footprint</span>
            <div className="icon"></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
