const GridSection = ({ children, className }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default GridSection;
