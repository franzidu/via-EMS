import React, { useState } from "react";
import styles from "./Story.module.css";

function TestStory() {
  const [showResult, setResult] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      Text: "Was mache ich?",
      options: [
        {
          id: 0,
          text: "Ich gehe davon aus, dass er mich gesehen hat.",
          via: false,
        },
        {
          id: 1,
          text: "Ich versuche, auf mich aufmerksam zu machen",
          via: true,
        },
      ],
    },
    {
      Text: "Hierfür haben wir via entwickelt!",
      options: [
        {
          id: 0,
          text: "via-siehst du mich?",
          via: true,
        },
        {
          id: 1,
          text: "via-rechts!",
          via: true,
        },
      ],
    },
  ];

  const optionClicked = (via) => {
    if (via) {
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setResult(true);
    }
  };

  return (
    <div className={styles.TestStory}>
      <h1>Story</h1>
      <div className="preStory">
        <p>
          Stell dir vor, du sitzt auf einem Fahrrad und bist in der Stadt
          unterwegs.
        </p>
        <p>Du bist gut drauf, denn du fährtst du deinem besten Freund.</p>
        <p>Das Fahrrad fährt sich angenehm leicht, es geht den Berg hinab.</p>
        <p>
          Du fährst an eine Kreuzung, hast Vorfahrt und fährst unbekümmert
          weiter.
        </p>
        <p>
          Du bemerkst ein Auto hinter dir, was dich mit großem Abstand überholt,
          denkst dir nichts dabei und fährst einfach weiter.
        </p>
        <p>
          Das Auto ist nun vor dir und bremst. Es will scheinbar rechts
          abbiegen.
        </p>
        <p>
          Mit einer starken Bremsung kommt das Auto noch vor dem Abbiegen zum
          stehen.
        </p>
        <p>
          Du bemerkst einen Passanten, der die Straße, wo das Auto abbiegt,
          überqueren will.
        </p>
        <p>
          Du kommst dem Auto immer näher, du bemerkst, dass es noch dauert, bis
          der Passant die Straße überquert hat.
        </p>
        <p>Du entscheidest dich, geradeaus an dem Auto vorbeizufahren.</p>
        <p>
          Je näher du dem Auto kommst, desto unsicherer wirst du, hat er dich
          gesehen?
        </p>
      </div>
      {showResult ? (
        <div className="result">
          <h1>Ergebnis</h1>
          <p>
            Der Autofahrer bekam nun eine Benachrichtigung, dass du in seinem
            näheren Umfeld bist! Du kannst beruhigt weiterfahren ohne in
            Alarmbereitschaft zu sein, oder bremsen zu müssen!
          </p>
          <h3>
            Beide Verkehrsteilnehmer führen ihre Route fort und kommen
            stressfrei und sicher an ihr Ziel.
          </h3>
          <a className="next" href="/">
            Ende
          </a>
        </div>
      ) : (
        <div className="questionCard">
          <h3>{questions[currentQuestion].Text}</h3>
          <h3>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => {
                    optionClicked(option.via);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                  key="option.id"
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TestStory;

{
  /* <p>
Der Autofahrer möchte rechts abbiegen! Nun musst du besonders
vorsichtig fahren um eine Kollision zu vermeiden, da du der
schwächere Verkehrsteilnehmer bist!
</p>
<p>
Wäre es nicht einfacher gewesen, wenn du dem Autofahrer deine
Präsenz hättest mitteilen können?
</p> */
}
