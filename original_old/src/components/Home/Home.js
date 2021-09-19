import Navbar from "../Navbar/Navbar";
import "./Home.css";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/lf30_editor_feowxy5d.json";

function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="Container">
      <Navbar />
      <Lottie options={defaultOptions} height={350} width={350} />
      <span
        className="f900 grad"
        style={{
          fontSize: "200%",
        }}
      >
        Providing Wings to Your Vision
      </span>{" "}
      <br />
      <span
        className="f400"
        style={{
          fontSize: "18pt",
          color: "#7e90b0",
          paddingLeft:'40px',
          paddingRight:'40px',
          paddingTop : '10px',
          display :'inline-block'
        }}
      >
        We help companies drive amazing business outcomes by delivering
        meaningful results using Artificial Intelligence and Machine Learning
        strategies.
      </span>

      <div class="btnwrapper">
    <a href="#" class="button">Contact us Now</a>
  </div>

    </div>
  );
}

export default Home;
