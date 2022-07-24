import React from "react";
import styles from "./Home.module.css";
import via_main from "../../assets/images/via_main.png";

function Home() {
  return (
    <div className={styles.Home}>
      <img className="viaMain" src={via_main} alt="" />
      <h1>Kommunikation im Straßenverkehr</h1>
      <p>mit via</p>
      <button href="#section1" className="next">
        weiter
      </button>
      <section className="section1" id="section1">
        <h3>Unfälle mit Fahrrädern werden immer Häufiger</h3>
        <h4>Fact</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </section>
      <section className="section2" id="section2">
        <h3>Das ist das Problem</h3>
        <h4>Problem</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </section>
      <section className="section3" id="section3">
        <h3>So entwickelt sich das problem</h3>
        <h4>autonomes fahren, ablenkung im straßenverkehr</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </section>
      <section className="section4" id="section4">
        <h3>Was ist via?</h3>
        <h4>wie hilft es dabei?</h4>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>
      </section>
      <p>
        hier kommt ein szenario wo via zum einsatz kommt, nutzerbezogen und
        emotional, evtl mit choice degöns
      </p>
      <button href="" className="next">
        story
      </button>
      <footer>
        <p> Ein Projekt von ...</p>
      </footer>
    </div>
  );
}

export default Home;
