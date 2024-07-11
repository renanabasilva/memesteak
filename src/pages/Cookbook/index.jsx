import styles from "./Cookbook.module.css"

function Cookbook() {
  return (
    <main className="main-container">
      <section className={`content-section ${styles.cookbookContainer}`}>
        <div className="center">
          <p className="popup-text">
            COMING SOON...
          </p>
        </div>
      </section>
    </main>
  );
}

export default Cookbook;
