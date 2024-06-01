import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignOut from "./pages/SignOut";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Header from "./components/Header";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className=" max-w-6xl mx-auto px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={"Page not found"} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
