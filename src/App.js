import { useState, useEffect } from "react";
function App() {
  const [color, setColor] = useState("white");
  const click = (color) => {
    setColor(color);
  };
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <h1>Background Changer</h1>
        <br />
        <br />
        <br />
        <br />
        <button
          className="outline-none text-white px-4 py-1 rounded  shadow-lg"
          style={{ backgroundColor: "red" }}
          onClick={() => {
            click("red");
          }}
        >
          Red
        </button>
        <button
          className="outline-non px-4 py-1 rounded shadow-lg"
          style={{ backgroundColor: "yellow" }}
          onClick={() => {
            click("yellow");
          }}
        >
          yellow
        </button>
        <button
          className="outline-none text-white  px-4 py-1 rounded  shadow-lg"
          style={{ backgroundColor: "green" }}
          onClick={() => {
            click("green");
          }}
        >
          Green
        </button>
        <button
          className="outline-none text-white  px-4 py-1 rounded tshadow-lg"
          style={{ backgroundColor: "gray" }}
          onClick={() => {
            click("gray");
          }}
        >
          gray
        </button>
        <button
          className="outline-none text-white px-4 py-1 rounded shadow-lg"
          style={{ backgroundColor: "black" }}
          onClick={() => {
            click("black");
          }}
        >
          Black
        </button>
        <button
          className="outline-none text-white px-4 py-1 rounded shadow-lg"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            click("blue");
          }}
        >
          Blue
        </button>
      </div>
    </>
  );
}

export default App;
