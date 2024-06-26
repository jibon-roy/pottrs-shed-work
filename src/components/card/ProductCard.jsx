import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@material-tailwind/react";
import img from "../../assets/products/green_shells.png";
import StarPicker from "react-star-picker";

const ProductCard = ({
  category,
  children,
  rating,
  imgSrc,
  quantity,
  price,
  starClass,
}) => {
  const simpleRenderer = ({ index, selectedIndex }) => {
    const selected = index <= selectedIndex;

    if (selected) {
      return String.fromCharCode(9733);
    }
    return String.fromCharCode(9734);
  };

  return (
    <Card
      className={`rounded-none bg-transparent mx-auto max-w-sm p-0 shadow-none`}
    >
      {category && (
        <CardHeader className="px-0 text-center shadow-none bg-secondary-green m-0 rounded-none text-xl py-5 text-accent-dark font-Inter">
          {category}
        </CardHeader>
      )}
      <CardBody
        className={`${
          rating ? "shadow-md hover:shadow-lg transition" : "shadow-none"
        } flex justify-center -p-2 flex-col bg-white items-center`}
      >
        <img
          src={imgSrc ? imgSrc : img}
          className={
            !rating ? "shadow-md hover:shadow-lg transition" : "shadow-none"
          }
        />

        {rating && (
          <StarPicker
            value={rating / 2}
            className={`blueTheme gap-3 bg-secondary-green w-full flex justify-center ${starClass}`}
            starRenderer={simpleRenderer}
            disabled
            starCount={2.5}
            size={40}
            halfStars
          ></StarPicker>
        )}
      </CardBody>
      <CardFooter className="px-0 bg-transparent pt-2 text-accent-dark font-Inter">
        <div className="py-1">{children}</div>
        <div className="py-1">
          {quantity ? `Available ${quantity}ps` : ""}
          {price ? `Price: $${price.toFixed(2)} ` : ""}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
