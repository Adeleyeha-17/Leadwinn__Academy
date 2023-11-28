import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Library } from "./pages/Library";
import { Techhub } from "./pages/Techhub";
import { Plans } from "./pages/Plans";
import { Privacy } from "./pages/Privacy";
import { Feedback } from "./pages/Feedback";
import { AnimatePresence } from "framer-motion";
import { Signin } from "./pages/Signin";

function App() {

  return (
    <>
      <AnimatePresence mode='wait'>
        <Router>
          <Routes>
            <Route path="/" element={<Layout><Home /></Layout>} />
            <Route path="/about" element={<Layout><About /></Layout>} />
            <Route path="/library" element={<Layout><Library /></Layout>} />
            <Route path="/tech-hub" element={<Layout><Techhub /></Layout>} />
            <Route path="/plans" element={<Layout><Plans /></Layout>} />
            <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
            <Route path="/feedback" element={<Layout><Feedback /></Layout>} />
            <Route path="/sign-in" element={<Signin />} />

          </Routes>
        </Router>
      </AnimatePresence>
    </>
  );
}

export default App;
