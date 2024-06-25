import Account from "./components/Account";
import Contact from "./components/Contact";
import Exercise from "./components/Exercise";
import Create from "./components/Create";
import Update from "./components/Update";
import Header from "./shared/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ExerciseDetails from "./components/ExerciseDetails";
import "./index.css";
import Footer from "./shared/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/exercise/:exerciseId" element={<ExerciseDetails />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
