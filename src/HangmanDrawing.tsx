const DRAWING_WIDTH = "10px";

const HEAD = (
  <div
    style={{
      position: "absolute",
      height: "50px",
      width: "50px",
      border: "10px solid black",
      borderRadius: "100%",
      right: "-30px",
      top: "50px",
    }}
  ></div>
);

const BODY = (
  <div
    style={{
      position: "absolute",
      height: "100px",
      width: DRAWING_WIDTH,
      backgroundColor: "black",
      right: "0",
      top: "120px",
    }}
  ></div>
);

const RIGHT_ARM = (
  <div
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "100px",
      transform: "rotate(-30deg)",
      transformOrigin: "left bottom",
      backgroundColor: "black",
      right: "-100px",
      top: "150px",
    }}
  ></div>
);

const LEFT_ARM = (
  <div
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "100px",
      transform: "rotate(30deg)",
      transformOrigin: "right bottom",
      backgroundColor: "black",
      right: "10px",
      top: "150px",
    }}
  ></div>
);

const RIGHT_LEG = (
  <div
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "100px",
      transform: "rotate(60deg)",
      transformOrigin: "left top",
      backgroundColor: "black",
      right: "-100px",
      top: "210px",
    }}
  ></div>
);

const LEFT_LEG = (
  <div
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "100px",
      transform: "rotate(-60deg)",
      transformOrigin: "right top",
      backgroundColor: "black",
      right: "10px",
      top: "210px",
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          position: "absolute",
          height: "50px",
          width: DRAWING_WIDTH,
          backgroundColor: "black",
          right: "0",
          top: "0",
        }}
      ></div>
      <div
        style={{
          height: DRAWING_WIDTH,
          width: "200px",
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "400px",
          width: DRAWING_WIDTH,
          backgroundColor: "black",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: DRAWING_WIDTH,
          width: "250px",
          backgroundColor: "black",
        }}
      ></div>
    </div>
  );
}
