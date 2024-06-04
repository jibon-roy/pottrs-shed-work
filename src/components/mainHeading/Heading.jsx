const Heading = ({ children, title, className }) => {
  return (
    <div
      className={`flex justify-center flex-col my-10 items-center ${className}`}
    >
      <p className="font-Inter text-base text-primary-green">
        {title ? title : ""}
      </p>
      <h3 className="text-3xl font-Inter font-semibold mt-2">{children}</h3>
    </div>
  );
};

export default Heading;
