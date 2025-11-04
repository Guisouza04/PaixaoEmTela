import { useState } from "react";
import GlobalStyles from "./styles/globalStyles.js";
import { Home } from "./pages/home/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
}

export default App;
