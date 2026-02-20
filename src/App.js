import logo from "./SheCodeslogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/Amel-coder-dot"
              target="_blank"
              rel="noreferrer"
            >
              Freya Collie
            </a>{" "}
            and is open-souced on
            <a
              href="https://github.com/Amel-coder-dot/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github
            </a>{" "}
            and is hosted on
            <a
              href="https://darling-sprinkles-f9e58f.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
