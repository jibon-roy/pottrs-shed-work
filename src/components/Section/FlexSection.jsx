const FlexSection = ({ children, className }) => {
  return (
    <div className={`flex flex-col md:flex-row ${className}`}>{children}</div>
  );
};

export default FlexSection;
