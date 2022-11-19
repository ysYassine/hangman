const DRAWING_WIDTH = "10px";

const HEAD = () => (
  <div
    key="HEAD"
    style={{
      position: "absolute",
      height: "50px",
      width: "50px",
      border: "10px solid white",
      borderRadius: "100%",
      right: "-30px",
      top: "50px",
    }}
  ></div>
);

const BODY = () => (
  <div
    key="BODY"
    style={{
      position: "absolute",
      height: "100px",
      width: DRAWING_WIDTH,
      backgroundColor: "white",
      right: "0",
      top: "120px",
    }}
  ></div>
);

const RIGHT_ARM = (isLoser: boolean) => (
  <div
    key="RIGHT_ARM"
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "90px",
      transform: isLoser ? "rotate(50deg)" : "rotate(-30deg)",
      transformOrigin: "left center",
      backgroundColor: "white",
      right: "-85px",
      top: "140px",
      transition: "transform 0.3s",
    }}
  ></div>
);

const LEFT_ARM = (isLoser: boolean) => (
  <div
    key="LEFT_ARM"
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "90px",
      transform: isLoser ? "rotate(-50deg)" : "rotate(30deg)",
      transformOrigin: "right center",
      backgroundColor: "white",
      right: "5px",
      top: "140px",
      transition: "transform 0.3s",
    }}
  ></div>
);

const RIGHT_LEG = () => (
  <div
    key="RIGHT_LEG"
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "100px",
      transform: "rotate(60deg)",
      transformOrigin: "left top",
      backgroundColor: "white",
      right: "-100px",
      top: "210px",
    }}
  ></div>
);

const LEFT_LEG = () => (
  <div
    key="LEFT_LEG"
    style={{
      position: "absolute",
      height: DRAWING_WIDTH,
      width: "100px",
      transform: "rotate(-60deg)",
      transformOrigin: "right top",
      backgroundColor: "white",
      right: "10px",
      top: "210px",
    }}
  ></div>
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

type RedCrossProps = {
  top: string;
  right: string;
};

function RedCross({ top, right }: RedCrossProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: top,
        right: right,
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "15px",
            width: "3px",
            backgroundColor: "#B42B51",
            rotate: "45deg",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            height: "15px",
            width: "3px",
            backgroundColor: "#B42B51",
            rotate: "-45deg",
          }}
        ></div>
      </div>
    </div>
  );
}

export default function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  const isLoser = numberOfGuesses > BODY_PARTS.length;
  return (
    <div style={{ position: "relative", margin: "12px" }}>
      {BODY_PARTS.slice(0, numberOfGuesses).map((element) => {
        return element(isLoser);
      })}
      {numberOfGuesses > BODY_PARTS.length && (
        <>
          <RedCross top="73px" right="-4px" />
          <RedCross top="73px" right="17px" />
        </>
      )}

      <div
        style={{
          position: "absolute",
          height: "50px",
          width: DRAWING_WIDTH,
          backgroundColor: "white",
          right: "0",
          top: "0",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          height: "60px",
          width: DRAWING_WIDTH,
          backgroundColor: "white",
          left: "140px",
          top: "-5px",
          rotate: "45deg",
        }}
      ></div>
      <div
        style={{
          height: DRAWING_WIDTH,
          width: "150px",
          backgroundColor: "white",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: "320px",
          width: DRAWING_WIDTH,
          backgroundColor: "white",
          marginLeft: "120px",
        }}
      ></div>
      <div
        style={{
          height: DRAWING_WIDTH,
          width: "280px",
          backgroundColor: "white",
        }}
      ></div>
    </div>
  );
}
