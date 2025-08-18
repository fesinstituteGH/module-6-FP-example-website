import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useState } from "react";
import MovieDetails from "./pages/Details";

function App() {
  const [searchText, setSearchText] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home setSearchText={setSearchText} searchText={searchText} />
          }
        />
        <Route
          path="/search"
          element={
            <Search setSearchText={setSearchText} searchText={searchText} />
          }
        />
        <Route path="/details/:imdbID" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
