import "../styles/global.css";
import "../styles/home.css";

import Header from "../components/Header";
import Section from "../components/Section";
import Aside from "../components/Aside";

function Home() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Section />
        <Aside />
      </main>
    </>
  );
}

export default Home;
