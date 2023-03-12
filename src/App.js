import Home from "./containers/home/home";
import Country from "./containers/country/country";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useLocalStorage from 'use-local-storage'
import Moon from './assets/icons/moon.png';
import "./App.css"


function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="mode">
        <button onClick={switchTheme}>
          <img src={Moon} alt="light mode" />
          <p>Dark Mode</p>
        </button>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
