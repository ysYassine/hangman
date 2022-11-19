type HangmanWordProps = {
  reveal: boolean;
  guessedLetters: string[];
  wordToGuess: string;
};

export default function HangmanWord({
  reveal,
  guessedLetters,
  wordToGuess,
}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "3.5rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
      {wordToGuess.split("").map((letter, index) => (
        <span
          style={{
            borderBottom: "0.1em solid white",
          }}
          key={index}
        >
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal
                  ? "#B42B51"
                  : "white",
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
