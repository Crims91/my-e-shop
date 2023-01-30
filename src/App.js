import { Route, Routes } from "react-router-dom";

import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";

const Shop = () => {
  return <h1>I am a SHOP page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
