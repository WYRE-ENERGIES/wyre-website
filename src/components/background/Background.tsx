import { useState, useEffect, Component } from "react";
import type { ReactNode } from "react";
import Spline from "@splinetool/react-spline";
import "./background.css"

class SplineErrorBoundary extends Component<
  { children: ReactNode; onError: () => void },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode; onError: () => void }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("Spline error:", error);
    this.props.onError();
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

const Background = () => {
  const [splineFailed, setSplineFailed] = useState(false);
  const [splineLoaded, setSplineLoaded] = useState(false);

  const handleSplineError = () => {
    setSplineFailed(true);
  };

  const handleSplineLoad = () => {
    setSplineLoaded(true);
  };

  // Timeout fallback - if Spline doesn't load within 10 seconds, show fallback
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!splineLoaded && !splineFailed) {
        setSplineFailed(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [splineLoaded, splineFailed]);

  return (
    <>
      {!splineFailed && (
        <SplineErrorBoundary onError={handleSplineError}>
          <Spline
            scene="https://prod.spline.design/TUFzW6NrUlVBSDUk/scene.splinecode"
            className={"canvas"}
            onError={handleSplineError}
            onLoad={handleSplineLoad}
          />
        </SplineErrorBoundary>
      )}
      <div className="purple-overlay" />
      {splineFailed && <div className="spline-fallback" />}
    </>
  );
};

export default Background;
