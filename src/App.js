import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import SearchPage from "./pages/SearchPage"; // add more routes as needed

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/search" element={<SearchPage />} /> */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;

