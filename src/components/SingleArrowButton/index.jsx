import style from "./SingleArrowButton.module.css";

function SingleArrowButton({ children }) {
  return(
    <button className={style.button}>
      {children}
    </button>
  );
}

export default SingleArrowButton;
