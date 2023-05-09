import "./app.css";
import React, { useState } from "react";

function App() {
  const [sliderValue, setSliderValue] = useState(10);
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [lowercaseChecked, setLowercaseChecked] = useState(false);
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [symbolsChecked, setSymbolsChecked] = useState(false);
  const [password, setPassword] = useState("");

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const numChecked = [
    uppercaseChecked,
    lowercaseChecked,
    numbersChecked,
    symbolsChecked,
  ].filter((checked) => checked).length;

  const strengthLevel =
    numChecked === 1
      ? "TOO WEAK"
      : numChecked === 2
      ? "WEAK"
      : numChecked === 3
      ? "MEDIUM"
      : numChecked === 4
      ? "STRONG"
      : " ";

  const Include = {
    Uppers: "QWERTYUIOPASDFGHJKLZXCVBNM",
    Lowers: "qwertyuiopasdfghjklzxcvbnm",
    Numbers: "1234567890",
    Symbols: "!@#$%^&*",
  };

  const getRandomCharFromString = (str) =>
    str.charAt(Math.floor(Math.random() * str.length));

  const generatePassword = () => {
    let pwd = "";
    if (uppercaseChecked) {
      pwd += Include.Uppers;
    }
    if (lowercaseChecked) {
      pwd += Include.Lowers;
    }
    if (numbersChecked) {
      pwd += Include.Numbers;
    }
    if (symbolsChecked) {
      pwd += Include.Symbols;
    }
    let newPwd = "";
    for (let i = 0; i < sliderValue; i++) {
      newPwd += getRandomCharFromString(pwd);
    }
    setPassword(newPwd);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <main>
        <div className="final-password">
          <span className="password">{password}</span>
          <svg width="21" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"
              fill="#A4FFAF"
            />
          </svg>
        </div>
        <div className="characteristics">
          <div className="character-length">
            <span className="length">Character Length</span>
            <span className="number">{sliderValue}</span>
          </div>
          <div className="slide-container">
            <input
              className="slider"
              type="range"
              id="vol"
              name="vol"
              min="5"
              max="20"
              step="1"
              value={sliderValue}
              onChange={handleSliderChange}
            />
          </div>
          <div className="checkbox">
            <div>
              <div
                className={`box ${uppercaseChecked ? "checked" : ""}`}
                id="Uppercase"
                onClick={() => setUppercaseChecked(!uppercaseChecked)}
              ></div>
              <label htmlFor="Uppercase"> Include Uppercase Letters</label>
            </div>
            <div>
              <div
                className={`box ${lowercaseChecked ? "checked" : ""}`}
                id="Lowercase"
                onClick={() => setLowercaseChecked(!lowercaseChecked)}
              ></div>
              <label htmlFor="Lowercase"> Include Lowercase Letters</label>
            </div>
            <div>
              <div
                className={`box ${numbersChecked ? "checked" : ""}`}
                id="Numbers"
                onClick={() => setNumbersChecked(!numbersChecked)}
              ></div>
              <label htmlFor="Numbers"> Include Numbers</label>
            </div>
            <div>
              <div
                className={`box ${symbolsChecked ? "checked" : ""}`}
                id="Symbols"
                onClick={() => setSymbolsChecked(!symbolsChecked)}
              ></div>
              <label htmlFor="Symbols"> Include Symbols</label>
            </div>
          </div>
          <div className="strength">
            <span className="title">STRENGTH</span>
            <span className="strength-level">{strengthLevel}</span>
            <div className="indicator">
              <div
                style={{
                  background:
                    numChecked === 1
                      ? "#F64A4A"
                      : numChecked === 2
                      ? "#FB7C58"
                      : numChecked === 3
                      ? "#F8CD65"
                      : numChecked === 4
                      ? "#A4FFAF"
                      : "",
                }}
              ></div>
              <div
                style={{
                  background:
                    numChecked === 1
                      ? ""
                      : numChecked === 2
                      ? "#FB7C58"
                      : numChecked === 3
                      ? "#F8CD65"
                      : numChecked === 4
                      ? "#A4FFAF"
                      : "",
                }}
              ></div>
              <div
                style={{
                  background:
                    numChecked === 1
                      ? ""
                      : numChecked === 2
                      ? ""
                      : numChecked === 3
                      ? "#F8CD65"
                      : numChecked === 4
                      ? "#A4FFAF"
                      : "",
                }}
              ></div>
              <div
                style={{
                  background:
                    numChecked === 1
                      ? ""
                      : numChecked === 2
                      ? ""
                      : numChecked === 3
                      ? ""
                      : numChecked === 4
                      ? "#A4FFAF"
                      : "",
                }}
              ></div>
            </div>
          </div>
          <button className="generate" onClick={generatePassword}>
            GENERATE
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#24232C"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
