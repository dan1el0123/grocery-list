import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import { useState, useEffect } from "react";
function App() {
  const [items, setItems] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [fetchError, setFetchError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const API_URL = "http://localhost:3500/items";
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const data = await response.json();
        setItems(data);
        setFetchError("");
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        items={items}
        setItems={setItems}
        setFetchError={setFetchError}
      />
      <SearchItem searchText={searchText} setSearchtext={setSearchText} />
      <main>
        {isLoading && <p>Loading list...</p>}
        {!isLoading && fetchError && (
          <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>
        )}
        {!isLoading && !fetchError && (
          <Content
            items={items}
            setItems={setItems}
            searchText={searchText}
            setFetchError={setFetchError}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
