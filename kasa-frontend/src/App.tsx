import { Routes, Route } from "react-router-dom";

import Error from "./app/error";
import Detail from "./app/detail";
import Home from './app/home/index';
import Housing from "./app/housing";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/housing" element={<Housing />} />

      {/* route not found */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;