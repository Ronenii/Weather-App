import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import "./assets/style/main.scss";
import Forecast from "./pages/Forecast";

export function RootCmp() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/display" element={<Forecast />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
