import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Footer from './components/Footer';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('items');

    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  const handleAddItems = (newItem) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleToggleItems = (id) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  return (
    <div className="App">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onToggleItem={handleToggleItems} />
      <Footer />
    </div>
  );
}

export default App;
