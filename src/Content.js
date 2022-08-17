import { useMemo } from "react";
import LineItem from "./LineItem";
const Content = ({ items, setItems, searchText }) => {
  const filteredItems = useMemo(
    () =>
      items.filter((item) => {
        return item.value.toLowerCase().includes(searchText.toLowerCase());
      }),
    [items, searchText]
  );

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
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
