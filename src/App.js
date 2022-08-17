import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import { useState, useEffect } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem items={items} setItems={setItems} />
      <main>
        {isLoading && <p>Loading list...</p>}
        {!isLoading && fetchError && (
          <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
        )}
        {!isLoading && !fetchError && <Content items={items} />}
        <Content items={items} />
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
