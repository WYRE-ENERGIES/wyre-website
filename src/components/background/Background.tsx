import Spline from "@splinetool/react-spline";
import "./background.css"

const Background = () => {
  return (
    <>
      <Spline
        scene="https://prod.spline.design/TUFzW6NrUlVBSDUk/scene.splinecode"
        className={"canvas"}
      />
      <div className="purple-overlay" />
    </>
  );
};

export default Background;
