import { Button } from "@material-tailwind/react";

const ButtonGreen = ({ children }) => {
  return (
    <Button className="bg-primary-green text-xl my-4 font-Inter text-white normal-case font-normal rounded-full">
      {children}
    </Button>
  );
};

export default ButtonGreen;
