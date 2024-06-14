import style from "./DoubleArrowButton.module.css";

function DoubleArrowButton({ children }) {
  return(
    <button className={style.button}>
      {children}
    </button>
  );
}

export default DoubleArrowButton;
