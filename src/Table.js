import { useState,useContext } from 'react';
import { DataContext } from './DataContext';
import Modal from './Modal';
import "./styles.css"

const Table = () => {
  const { data, selectedItems, setSelectedItems, setData } = useContext(DataContext);
 const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
      const handleDelete = () => {
    const updatedData = data.filter((item) => !selectedItems.includes(item.id));
    setData(updatedData);
    setSelectedItems([]);
  };
const handleEdit =(item) =>{
  setSelectedItem(item)
  setShowModal(true)
}
const handleCloseModal = () =>{
  setSelectedItem(null)
  setShowModal(false)
  
}

  return (
    <div>
    <table className="table">
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Title</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.brand}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>
              <button onClick={handleEdit} >Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="7">
            <button onClick={handleDelete}>Delete Selected</button>
          </td>
        </tr>
      </tfoot>
    </table>
     {showModal && <Modal item={selectedItem} onClose={handleCloseModal} />}
     </div>
  );
};

export default Table;
