import { useState } from "react";
import Spline from "@splinetool/react-spline";
import "./background.css"

const Background = () => {
  const [splineFailed, setSplineFailed] = useState(false);

  const handleSplineError = () => {
    setSplineFailed(true);
  };

  return (
    <>
      <Spline
        scene="https://prod.spline.design/TUFzW6NrUlVBSDUk/scene.splinecode"
        className={"canvas"}
        onError={handleSplineError}
      />
      <div className="purple-overlay" />
      {splineFailed && <div className="spline-fallback" />}
    </>
  );
};

export default Background;
