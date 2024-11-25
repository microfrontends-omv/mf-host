import React from "react";
import ReactDOM from "react-dom/client";
import ColorPicker from "colorPicker/ColorPicker";
import ColorList from "colorList/ColorList";
import { useColors } from "colorPicker/useColors";

import "./index.css";

const App = () => {
  const useColorsProps = useColors();
  return (
    <>
      <h1 className="text-center bg-dark text-white p-2">Color Picker</h1>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <ColorList {...useColorsProps} />
          </div>
          <div className="col-12 col-md-8">
            <ColorPicker {...useColorsProps} />
          </div>
        </div>
      </div>
    </>
  );
};
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
