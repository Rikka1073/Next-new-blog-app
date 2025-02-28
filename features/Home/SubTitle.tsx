const SubTitle = ({ children }) => {
  return (
    <h2
      className="mb-5 text-center text-lg font-bold text-[#75593D]"
      data-testid="sub-title"
    >
      {children}
    </h2>
  );
};

export default SubTitle;
