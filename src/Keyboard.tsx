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

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        alignSelf: "stretch",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: "0.5rem",
      }}
    >
      {KEYS.map((keyLetter) => {
        const isActive = activeLetters.includes(keyLetter);
        const isDisabled = inactiveLetters.includes(keyLetter);
        const classList = [
          styles.btn,
          isActive && styles.active,
          isDisabled && styles.inactive,
        ];

        return (
          <button
            disabled={isDisabled || isActive}
            onClick={() => addGuessedLetter(keyLetter)}
            className={classList.join(" ")}
            key={keyLetter}
          >
            {keyLetter}
          </button>
        );
      })}
    </div>
  );
}
