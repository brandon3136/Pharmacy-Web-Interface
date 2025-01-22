import React, { useState } from 'react';

const Products = ({ medicines, likeIcon }) => {
  // Initialize likes state for all medicines
  const [likesState, setLikesState] = useState(
    medicines.map((medicine) => medicine.likes || 0)
  );

  // Function to handle increment of likes
  const incrementLikes = (index) => {
    setLikesState((prevLikes) => {
      const newLikes = [...prevLikes];
      newLikes[index] = newLikes[index] + 1; 
      return newLikes;
    });
  };

  return (
    <div className="productsContainer">
      {medicines.map((medicine, index) => (
        <div key={index} className="productCard">
          <img src={medicine.image} alt={medicine.name} className="productImage" />
          <h3 className="productName">{medicine.name}</h3>
          <p className="productPrice">Tsh {medicine.price}/=</p>
          <div className="likeContainer">
            <img 
              src={likeIcon} 
              alt="Like Icon" 
              className="likeIcon" 
              onClick={() => incrementLikes(index)} 
            />
            <p className="likes">{likesState[index]}</p> 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
