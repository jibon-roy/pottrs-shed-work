const Section = ({ children, className }) => {
  return (
    <section className={`px-2 md:px-10 lg:px-20 xl:px-36 ${className}`}>
      {children}
    </section>
  );
};

export default Section;