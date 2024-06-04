import { Card, CardBody, CardFooter } from "@material-tailwind/react";
import img from "../../assets/products/green_shells.png";
import StarPicker from "react-star-picker";

const ProductCard = ({ children, rating, imgSrc, quantity, price }) => {
  const simpleRenderer = ({ index, selectedIndex }) => {
    const selected = index <= selectedIndex;

    if (selected) {
      return String.fromCharCode(9733);
    }
    return String.fromCharCode(9734);
  };

  return (
    <Card
      className={`rounded-none max-w-sm p-0 mx-5 ${
        rating ? "shadow-md" : "shadow-none"
      }`}
    >
      <CardBody
        className={`${
          !rating && "shadow-md"
        } flex justify-center p-0 flex-col items-center`}
      >
        <img src={imgSrc ? imgSrc : img} />

        {rating && (
          <StarPicker
            value={rating / 2}
            className="blueTheme bg-secondary-green w-full flex justify-center"
            starRenderer={simpleRenderer}
            disabled
            starCount={2.5}
            size={50}
            halfStars
          ></StarPicker>
        )}
      </CardBody>
      <CardFooter className="px-0 py-2">
        <div className="py-2">{children}</div>
        <div className="py-2">
          {quantity ? `Available ${quantity}ps` : ""}
          {price ? `Price: $${price.toFixed(2)} ` : ""}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
