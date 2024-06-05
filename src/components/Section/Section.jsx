import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Section = ({ children, className }) => {
  const cardAnimation = useRef();

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(cardAnimation.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        target: cardAnimation.current,
        start: "top 80%",
        end: "top 50%",
        scrub: 1,
      },
    });
  });
  return (
    <section
      ref={cardAnimation}
      className={`px-2 md:px-10  lg:px-16 2xl:px-36 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
