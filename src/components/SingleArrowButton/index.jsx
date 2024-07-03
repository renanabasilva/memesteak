import style from "./SingleArrowButton.module.css";

function SingleArrowButton({ children }) {
  return (
    <button className={style.button} tabIndex="0">
      {children}
    </button>
  );
}

export default SingleArrowButton;
