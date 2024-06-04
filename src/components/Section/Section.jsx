const Section = ({ children, className }) => {
  return (
    <section className={`px-2 md:px-6 lg:px-20 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
