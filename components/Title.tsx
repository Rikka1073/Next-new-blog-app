const Title = ({ children }) => {
  return (
    <h1 className="text-2xl font-bold text-center mb-10" data-testid="title">
      {children}
    </h1>
  );
};

export default Title;
