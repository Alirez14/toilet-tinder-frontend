import logo from "./logo.svg";
import "./App.css";
import ComToilet from "./components/ComToilet";
import StyleConst from "./style/StyleConst";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: StyleConst.Colors.background }}
    >
      <ComToilet></ComToilet>
    </div>
  );
}

export default App;
