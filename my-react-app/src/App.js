// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="col-4 fl">
          <div className="col-1">
            <div className="col-2 bg1 fl"></div>
            <div className="col-2 bg2 fr"></div>
          </div>
          <div className="col-1">
            <div className="col-2 bg3 fl"></div>
            <div className="col-2 bg4 fr"></div>
          </div>
          <div className="col-1 bg3"></div>
          <div className="col-1 bg4"></div>
        </div>
        <div className="col-4 new">
          <div className="col-1 bg1"></div>
          <div className="col-1 bg2"></div>
          <div className="col-1 bg3"></div>
          <div className="col-1 bg4"></div>
        </div>
        <div className="col-4 new">
          <div className="col-1 bg1"></div>
          <div className="col-1 bg2"></div>
          <div className="col-1">
            <div className="col-2 bg1 fl"></div>
            <div className="col-2 bg2 fr"></div>
          </div>
          <div className="col-1">
            <div className="col-2 bg1 fl"></div>
            <div className="col-2 bg2 fr"></div>
          </div>
        </div>
        <div className="col-4 fr">
          <div className="col-1 bg1"></div>
          <div className="col-1">
            <div className="col-2 bg1 fl"></div>
            <div className="col-2 bg2 fr"></div>
          </div>
          <div className="col-1 bg3"></div>
          <div className="col-1">
            <div className="col-2 bg1 fl"></div>
            <div className="col-2 bg2 fr"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
