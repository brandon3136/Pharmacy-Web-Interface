

const Products = ({ medicines }) => {
  return (
    <div className="productsContainer">
      {medicines.map((medicine, index) => (
        <div key={index} className="productCard">
          <img src={medicine.image} alt={medicine.name} className="productImage" />
          <h3 className="productName">{medicine.name}</h3>
          <p className="productPrice">Tsh {medicine.price}/=</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
