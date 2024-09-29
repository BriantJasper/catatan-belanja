/* eslint-disable no-unused-vars */
import { useRef, useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";

export default function App() {
  const [groceryItems, setGroceryItems] = useState([
    {
      id: 1,
      name: "Kopi Bubuk",
      quantity: 2,
      checked: true,
    },
    {
      id: 2,
      name: "Gula Pasir",
      quantity: 5,
      checked: false,
    },
    {
      id: 3,
      name: "Air Mineral",
      quantity: 3,
      checked: false,
    },
  ]);

  const [items, setItems] = useState(groceryItems);
  const [sortBy, setSortBy] = useState("input");

  function handleAddItem(item) {
    setItems([...items, item]);
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleSortChange(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItem={handleAddItem} />
      <GroceryList
        items={items}
        onDeleteItem={handleDeleteItem}
        onClearItems={handleClearItems}
        onToggleItem={handleToggleItem}
        sortBy={sortBy}
        onSortChange={handleSortChange}
      />
      <Footer items={items} />
    </div>
  );
}
