const FlexSection = ({ children, className }) => {
  return <div className={`block lg:flex ${className}`}>{children}</div>;
};

export default FlexSection;
