import { Routes, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

function App() {

  return (
    <div className="App container">
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">
            Firecards
          </Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/not-found">Not Found</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
