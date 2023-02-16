import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="App">
      {isOn && <div>It is on</div>}
      <button
        onClick={() => {
          setTimeout(() => {
            setIsOn(true);
            setTimeout(() => {
              setIsOn(false);
            }, 200);
          }, 300);
        }}
      >
        Turn on
      </button>
    </div>
  );
}
