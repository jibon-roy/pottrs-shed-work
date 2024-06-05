import GridSection from "../../Section/GridSection";
import Section from "../../Section/Section";
import photo1 from "../../../assets/images/photos/Rectangle113.png";
import photo2 from "../../../assets/images/photos/Rectangle114.png";
import photo3 from "../../../assets/images/photos/Rectangle115.png";
import photo4 from "../../../assets/images/photos/Rectangle116.png";
import photo5 from "../../../assets/images/photos/Rectangle117.png";
import photo6 from "../../../assets/images/photos/Rectangle118.png";
import photo7 from "../../../assets/images/photos/Rectangle119.png";
import photo8 from "../../../assets/images/photos/Rectangle120.png";
import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import Heading from "../../mainHeading/Heading";

const InstagramSection = () => {
  const [open, setOpen] = useState(false);
  const [carouselPhotos, setCarouselPhotos] = useState([]);

  const Open = (photoIdx) => {
    const rearrangedPhotos = [
      ...photos.slice(photoIdx),
      ...photos.slice(0, photoIdx),
    ];
    setCarouselPhotos(rearrangedPhotos);
    setOpen(true);
  };

  const photos = [
    photo1,
    photo2,
    photo3,
    photo4,
    photo5,
    photo6,
    photo7,
    photo8,
  ];

  return (
    <Section>
      <div className="mb-10">
        <Heading className="mb-3">Follow Us On Instagram</Heading>
        <p className="text-center text-3xl font-medium text-primary-green">
          @pottersshed_wholesale
        </p>
      </div>
      <GridSection className="gap-1">
        {photos.map((photo, idx) => (
          <div key={idx}>
            <img
              className="hover:brightness-75 transition cursor-pointer"
              src={photo}
              onClick={() => Open(idx)}
            />
          </div>
        ))}
        <Dialog
          open={open}
          className="w-full bg-transparent flex justify-center shadow-none"
          handler={() => setOpen(false)}
          size="sm"
        >
          <Carousel
            loop
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 rounded-full bg-black/50 active:bg-black/65 hover:bg-black/65 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 bg-black/50 disabled:bg-black/15 rounded-full hover:bg-black/65 active:bg-black/65 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
          >
            {carouselPhotos.map((photo, idx) => (
              <div key={idx}>
                <img
                  className="object-contain w-full h-auto max-h-[80vh]"
                  src={photo}
                />
              </div>
            ))}
          </Carousel>
          <div
            className="bg-primary-green text-white text-4xl py-2 rounded-full px-4 cursor-pointer hover:bg-black transition fixed right-10 top-10"
            onClick={() => setOpen(false)}
          >
            X
          </div>
        </Dialog>
      </GridSection>
    </Section>
  );
};

export default InstagramSection;
