import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, forwardRef } from "react";

const Section = forwardRef(({ children, className, animated }, ref) => {
  const cardAnimation = ref || useRef(null);

  useGSAP(() => {
    if (animated) {
      gsap.registerPlugin(ScrollTrigger);

      if (cardAnimation.current) {
        const animation = gsap.fromTo(
          cardAnimation.current,
          { opacity: 0, y: 100, duration: 0.3 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: cardAnimation.current,
              start: "top 80%", // Start animation when top of the element hits 80% of the viewport height
              end: "bottom 20%", // End animation when bottom of the element hits 20% of the viewport height
              toggleActions: "play none none reverse", // Animation play and reverse actions
              // markers: true, // Enable markers to see the start and end points
            },
          }
        );

        return () => {
          if (animation.scrollTrigger) {
            animation.scrollTrigger.kill();
          }
        };
      } else {
        // console.log("Element not found!");
      }
    }
  });

  return (
    <section
      ref={cardAnimation}
      className={`animate-section overflow-x-hidden overflow-y-hidden px-2 md:px-10 lg:px-16 2xl:px-36 ${className}`}
    >
      {children}
    </section>
  );
});

export default Section;
