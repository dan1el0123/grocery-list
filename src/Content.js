import { useMemo } from "react";
import LineItem from "./LineItem";
import apiRequest from "./api/apiRequest";
const Content = ({ items, setItems, searchText, setFetchError }) => {
  const API_URL = "http://localhost:3500/items";
  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        return item.value.toLowerCase().includes(searchText.toLowerCase());
      }),
    [items, searchText]
  );

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions = {
      method: "DELETE",
    };
    const result = await apiRequest(`${API_URL}/${id}`, deleteOptions);
    if (result) setFetchError(result);
  };

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    const myItem = listItems.find((item) => item.id === id);
    console.log(myItem);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ checked: myItem.checked }),
    };
    const result = await apiRequest(`${API_URL}/${id}`, updateOptions);
    if (result) setFetchError(result);
  };

  return (
    <>
      {filteredItems.length ? (
        <ul>
          {filteredItems.map((item) => (
            <LineItem
              item={item}
              key={item.id}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      ) : (
        <p>Your list is empty...</p>
      )}
    </>
  );
};

export default Content;
