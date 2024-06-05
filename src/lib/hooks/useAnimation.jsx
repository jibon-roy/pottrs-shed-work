import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const useAnimation = () => {
  const leftRef = useRef();
  const rightRef = useRef();
  const topRef = useRef();
  const bottomRef = useRef();
  const topLeftRef = useRef();
  const topRightRef = useRef();
  const bottomRightRef = useRef();
  const bottomLeftRef = useRef();

  useGSAP(() => {
    gsap.from(leftRef.current, { x: -500, y: 0, duration: 2 });
    gsap.from(rightRef.current, { x: 500, y: 0, duration: 2 });
  });
  const ref = {
    leftRef,
    rightRef,
    topRef,
    topLeftRef,
    bottomLeftRef,
    bottomRef,
    topRightRef,
    bottomRightRef,
  };
  return ref;
};

export default useAnimation;
