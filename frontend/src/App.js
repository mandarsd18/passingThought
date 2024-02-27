import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register.jsx";
import Detail from "./components/Detail";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="/"
              element={
                <>
                  <Navbar />
                  <Main />
                </>
              }
            ></Route>
            <Route
              path="/login"
              element={
                <>
                  <Navbar />
                  <Login />
                </>
              }
            />
            <Route
              path="/register"
              element={
                <>
                  <Navbar />
                  <Register />
                </>
              }
            />
            <Route
              path="/thoughts/:id"
              element={
                <>
                  <Navbar />
                  <Detail/>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
