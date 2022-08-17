import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";
const AddItem = ({ items, setItems }) => {
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItemObj = {
      id,
      checked: false,
      value: newItem,
    };
    const listItems = [...items, newItemObj];
    setItems(listItems);
    setNewItem("");
  };

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        ref={inputRef}
        id="addItem"
        placeholder="Add item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        autoFocus
        required
      />
      <button
        type="submit"
        aria-label="Add item"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItem;
