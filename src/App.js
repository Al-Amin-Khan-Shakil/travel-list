import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Footer from './components/Footer';

function App() {
  const savedItems = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  const [items, setItems] = useState(savedItems);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');

    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const handleAddItems = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const handleToggleItems = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onToggleItem={handleToggleItems}
        onDeleteItem={handleDeleteItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
