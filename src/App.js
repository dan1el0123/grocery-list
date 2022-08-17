import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState, useEffect } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <main>
        {isLoading && <p>Loading list...</p>}
        {!isLoading && fetchError && (
          <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
        )}
        {!isLoading && !fetchError && <Content />}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
