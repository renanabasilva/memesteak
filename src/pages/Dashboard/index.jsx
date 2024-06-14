import SingleArrowButton from "../../components/SingleArrowButton";
import NavigationLink from "../../components/NavigationLink";

function Dashboard() {
  const pages = [
    {
      name: "VAULTS",
    },
    {
      name: "STEAKPAD",
    },
    {
      name: "COOKBOOK",
    },
    {
      name: "COMMUNITY",
    },
  ];

  return (
    <main>
      <section>
        <h1>DASHBOARD</h1>
        <div>
          <div>
            <h3>SELECT GAME</h3>
            <ul>
              {pages.map((page, index) => (
                <NavigationLink
                  key={index}
                  linkType="internal"
                  link={`/${page.name}`}
                >
                  <SingleArrowButton>{page.name}</SingleArrowButton>
                </NavigationLink>
              ))}
            </ul>
          </div>
          <div>
            {/* <img src="" alt="" /> */}
            <div
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid #00F",
              }}
            ></div>
          </div>
        </div>
        <footer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            soluta vitae, enim, delectus alias ducimus corporis sequi natus
            libero numquam recusandae amet dolores modi temporibus aspernatur
            odit praesentium distinctio est!
          </p>
        </footer>
      </section>
    </main>
  );
}

export default Dashboard;
