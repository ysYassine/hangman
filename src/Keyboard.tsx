import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export default function Keyboard() {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((keyLetter) => (
        <button className={`${styles.btn}`} key={keyLetter}>
          {keyLetter}
        </button>
      ))}
    </div>
  );
}
