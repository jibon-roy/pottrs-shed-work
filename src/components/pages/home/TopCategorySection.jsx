import Section from "../../Section/Section";
import ProductCard from "../../card/ProductCard";
import Heading from "../../mainHeading/Heading";
import img1 from "../../../assets/products/Rectangle97.png";
import img2 from "../../../assets/products/Rectangle97_1.png";
import img3 from "../../../assets/products/Rectangle97_2.png";
import img4 from "../../../assets/products/Rectangle97_3.png";
import GridSection from "../../Section/GridSection";

const TopCategorySection = () => {
  const products = [
    {
      id: 1,
      category: "Ceramics/Pots",
      title: "Blue & White Spring Time Pot",
      imgSrc: img1,
      rating: 0.1,
      price: 100,
    },
    {
      id: 2,
      category: "Metal Animals/Birds",
      title: "Metal Animals/Birds",
      price: 100,
      imgSrc: img2,
      rating: 0.1,
    },
    {
      id: 3,
      category: "Rusty Gardenware",
      title: "Rusty Gardenware",
      price: 100,
      imgSrc: img3,
      rating: 0.1,
    },
    {
      id: 4,
      category: "Decorative",
      title: "Decorative",
      price: 100,
      imgSrc: img4,
      rating: 0.1,
    },
  ];
  return (
    <Section className="py-5">
      <Heading title={"Here is Our Top Categories"}>Top Categories</Heading>
      <GridSection className="gap-5">
        {products.map(({ id, category, title, price, imgSrc, rating }) => (
          <ProductCard
            key={id}
            category={category}
            price={price}
            imgSrc={imgSrc}
            rating={rating}
          >
            {title}
          </ProductCard>
        ))}
      </GridSection>
    </Section>
  );
};

export default TopCategorySection;
