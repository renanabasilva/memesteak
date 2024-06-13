import DoubleArrowButton from "../../components/DoubleArrowButton";
import Header from "../../components/Header";
import TokenCard from "../../components/TokenCard";

function Steakpad() {
  return (
    <main>
      <Header />
      <section>
        <div>
          <h1>STEAKPAD</h1>
          <p>
            Memesteak description and info. Memesteak description and info.
            Memesteak description and info. Memesteak description and info.
            Memesteak description.
          </p>
          <DoubleArrowButton>
            <a href="/steakpad">JOIN POOL</a>
          </DoubleArrowButton>
        </div>
        <div>
          <TokenCard />
          <TokenCard />
          <TokenCard />
        </div>
        <footer>
          <p>
            If they have a project they'd like to launch on our platform to get
            in touch with a button they can press to fill a basic form out.
          </p>
          <DoubleArrowButton>
            <a href="/steakpad">CONTACT US</a>
          </DoubleArrowButton>
        </footer>
      </section>
    </main>
  );
}

export default Steakpad;
