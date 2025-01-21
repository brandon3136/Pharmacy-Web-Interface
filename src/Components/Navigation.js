import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <div className="navContainer">
      <ul>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/products" >Our Products</Link></li>
        <li><Link to="/about-us" >About</Link></li>
      </ul>
    </div>
  );
};

export default Navigation;
