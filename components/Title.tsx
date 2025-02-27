const Title = ({ children }) => {
  return (
    <h1
      className="mb-10 text-center text-2xl font-bold text-[#75593D]"
      data-testid="title"
    >
      {children}
    </h1>
  );
};

export default Title;
