import { useContext } from "react";
import { DataContext } from "./DataContext";

const Modal = ({ item, onClose }) => {
  const { data, setData } = useContext(DataContext);

  const handleSave = (updatedItem) => {
    const updatedData = data.map((d) =>
      d.id === updatedItem.id ? { ...d, ...updatedItem } : d
    );
    setData(updatedData);
    onClose();
  };

  return (
    <div className="modal">
      <div>
        <h2>Edit Item</h2>
        <label>Title:</label>
        <input
          type="text"
          value={item.title}
          onChange={(e) => {
            e.preventDefault();
            handleSave({ ...item, title: e.target.value });
          }}
        />
        <label>Brand:</label>
        <input
          type="text"
          value={item.brand}
          onChange={(e) => {
            e.preventDefault();
            handleSave({ ...item, brand: e.target.value });
          }}
        />
        <label>Category:</label>
        <input
          type="text"
          value={item.category}
          onChange={(e) => {
            e.preventDefault();
            handleSave({ ...item, category: e.target.value });
          }}
        />
        <label>Price:</label>
        <input
          type="text"
          value={item.price}
          onChange={(e) => {
            e.preventDefault();
            handleSave({ ...item, price: e.target.value });
          }}
        />

        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
