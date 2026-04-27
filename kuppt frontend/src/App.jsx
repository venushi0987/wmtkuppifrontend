import { useEffect, useState } from "react";
import { getItems } from "./api";
import ItemForm from "./components/ItemForm";
import ItemList from "./components/ItemList";

function App() {
    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const response = await getItems();
        setItems(response.data);
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
        <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'sans-serif' }}>
            <h1>Kuppi Item Management</h1>
            <ItemForm onItemAdded={fetchItems} />
            <ItemList items={items} onRefresh={fetchItems} />
        </div>
    );
}

export default App;