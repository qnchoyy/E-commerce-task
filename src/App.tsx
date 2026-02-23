import { useState } from "react";
import Header from "./components/Header/Header";

function App() {
  const [activeCategory, setActiveCategory] = useState("bags");

  return (
    <>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
    </>
  );
}

export default App;
