export const Button = (props: any) => {
  const { className, children, rest } = props;
  return (
    <button
      className={`bg-blue-700 px-5 py-2 text-lg text-semibold text-white hover:bg-blue-500 ${
        className && className
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
