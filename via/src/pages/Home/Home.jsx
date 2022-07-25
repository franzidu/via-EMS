import React from "react";
import styles from "./Home.module.css";
import via_main from "../../assets/images/via_main.png";

function Home() {
  return (
    <div className={styles.Home}>
      <img className="viaMain" src={via_main} alt="" />
      <h1>Kommunikation im Straßenverkehr</h1>
      <a className="next" href="#section1">
        weiter
      </a>

      <div className="content-container">
        <div className="content">
          <section className="sections" id="section1">
            <h3>14,6% aller Unfalltoten sind Fahrradfahrer.</h3>
            {/* <h4>Fact</h4> */}
            <p className="text">
              Ursachen sind oft Fahrlassigkeit und Unachtsamkeit, auch seitens
              der Autofahrer.
            </p>
          </section>
          <a className="next" href="#section2">
            weiter
          </a>
        </div>

        <div className="content">
          <section className="sections" id="section2">
            <h3>Das ist das Problem</h3>
            {/* <h4>Problem</h4> */}
            <p className="text">
              Im Straßenverkehr wird egoistisch gedacht. Durch die räumliche
              Trennung werden nicht mehr die Menschen hinter den Fahrzeugen
              gesehen.
            </p>
          </section>
          <a className="next" href="#section3">
            weiter
          </a>
        </div>

        <div className="content">
          <section className="sections" id="section3">
            <h3>So entwickelt sich das problem</h3>
            <h4>autonomes fahren, ablenkung im straßenverkehr</h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </section>
          <a className="next" href="#section4">
            weiter
          </a>
        </div>

        <div className="content">
          <section className="sections" id="section4">
            <h3>Was ist via?</h3>
            <h4>wie hilft es dabei?</h4>
            <p className="text">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </section>
          {/* <a className="next" href="#szenario">weiter</a> */}
        </div>
        <div className="szenario" id="szenario">
          <p>
            hier kommt ein szenario wo via zum einsatz kommt, nutzerbezogen und
            emotional, evtl mit choice degöns
          </p>
        </div>
      </div>
      <footer>
        <div className="footer">
          <p> Ein Projekt des 4. Semesters Interactive Media Design 2022</p>
          <p>
            Simon de Vries, Franziska Dudichum, Florian Pfücker, Afeni Sodatonou
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
