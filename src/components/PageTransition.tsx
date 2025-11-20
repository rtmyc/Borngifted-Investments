import { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage("fadeOut");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === "fadeOut") {
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("fadeIn");
      }, 150); // Half of the total transition time

      return () => clearTimeout(timeout);
    }
  }, [transitionStage, location]);

  return (
    <div
      className={`transition-opacity duration-300 ease-in-out ${
        transitionStage === "fadeOut" ? "opacity-0" : "opacity-100"
      }`}
      onTransitionEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
        }
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
