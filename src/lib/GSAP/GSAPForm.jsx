import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const useGSAPFrom = (animationConfig) => {
  const elementRef = useRef(null);

  useGSAP(() => {
    if (elementRef.current) {
      gsap.from(elementRef.current, animationConfig);
    }
  });

  return elementRef;
};

export default useGSAPFrom;
