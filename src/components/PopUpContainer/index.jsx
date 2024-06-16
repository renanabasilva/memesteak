function PopUpContainer({ children }) {
  return (
    <>
      <div>
        <span>&times;</span>
        <div>{children}</div>
      </div>
    </>
  );
}

export default PopUpContainer;
