export default function HangmanWord() {
  const word = "GOAT";
  const guessedLetters = ["M", "Y", "S", "G"];

  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {word.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: "0.1em solid black",
          }}
        >
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
            key={index}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
