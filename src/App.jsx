import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import LifeStyle from "./pages/LifeStyle";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Registration from "./pages/Registration";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
        </Route>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}
