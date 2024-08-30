const Row = ({
  children,
  className,
  margin,
  padding,
  maxWidth,
  width,
  justifyContent = "",
  alignItems = "",
  gap = "",
  display = "flex",
  flexDirection,
  style,
}) => {
  return (
    <div
      className={`row ${className ? className : ""}`}
      style={{
        margin,
        padding,
        maxWidth,
        display,
        justifyContent,
        alignItems,
        gap,
        flexDirection,
        width,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
