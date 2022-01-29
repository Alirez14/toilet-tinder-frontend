import logo from "./logo.svg";
import "./App.css";
import StyleConst from "./style/StyleConst";
import PageTinder from "./pages/PageTinder";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: StyleConst.Colors.background }}
    >
      <PageTinder></PageTinder>
    </div>
  );
}

export default App;
