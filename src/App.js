//import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  };

  const toggleMode = (cls) => {
    console.log(cls);
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - light";
    }
  };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "grey";
  //     showAlert("Dark mode has been enabled", "success");
  //     document.title = "TextUtils - Dark";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //     document.title = "TextUtils - light";
  //   }
  // };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <strong>
          <Alert alert={alert} />
        </strong>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter the Text to analyze"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
