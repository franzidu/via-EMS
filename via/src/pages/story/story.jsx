import React from "react";
import styles from "./Story.module.css";
import Popup from "../../components/PopUp/Choice A1.jsx";
import "reactjs-popup/dist/index.css";

function Story() {
  //   const choiceA = () => {};
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className={styles.Story}>
      <div className="content-container">
        <h3>Die Story</h3>

        <div className="content">
          <section className="section1">
            <p>
              Stell dir vor, du sitzt auf einem Fahrrad und bist in der Stadt
              unterwegs
            </p>
            <p>Du bist gut drauf, wenn du fährtst du deinem besten Freund.</p>
            <p>
              Das Fahrrad fährt sich angenehm leicht, es geht den berg hinab.
            </p>
          </section>
          <section className="section2">
            <p>
              Du fährst an eine Kreuzung an, hast Vorfahrt und fährst
              unbekümmert weiter.
            </p>
            <p>
              Du bemerkst ein Auto hinter dir, was dich mit großem Abstand
              überholt, denkst dir nichts dabei und fährst einfach weiter.
            </p>
            <p>
              Das Auto ist nun vor dir und bremst. Es will scheinbar rechts
              abbiegen.
            </p>
            <p>
              Mit einer starken Bremsung kommt das Auto noch vor dem Abbiegen
              zum stehen.
            </p>
            <p>
              Du bemerkst einen Passanten, der die Straße, wo das Auto abbiegt,
              überqueren will.
            </p>
          </section>
          <section>
            <p>
              Du kommst dem Auto immer näher, du bemerkst, dass es noch dauert,
              bis der Passant die Straße überquert hat.
            </p>
            <p>Du entscheidest dich, geradeaus an dem Auto vorbeizufahren.</p>
            <p>
              {" "}
              Je näher du dem Auto kommst, desto unsicherer wirst du, hat er
              mich gesehen?
            </p>
          </section>

          <button variant="primary" onClick={() => setModalShow(true)}>
            ich halte an
          </button>

          <Popup show={modalShow} onHide={() => setModalShow(false)} />

          <button className="discardVia">"via - siehst du mich?"</button>
        </div>
      </div>
    </div>
  );
}

export default Story;
