import style from "./DoubleArrowButton.module.css";

function DoubleArrowButton({ children }) {
  return (
    <button className={style.button} tabIndex="0">
      {children}
    </button>
  );
}

export default DoubleArrowButton;
