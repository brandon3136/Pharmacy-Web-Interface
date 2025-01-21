import facebookImg from '../assets/facebook-boxed-svgrepo-com.png'
import instagramImg from '../assets/instagram-svgrepo-com.png'
import linkedinImg from '../assets/linkedin-svgrepo-com (1).png'
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 HealthLine. All rights reserved.</p>
        <div className="footer-links">
          <img src= {facebookImg} /> <a href="#" >: health_line</a><br />
          <img src={instagramImg} alt="" /><a href="#" >: health_line</a><br />
          <img src={linkedinImg} alt="" /><a href="#" >: health_line</a><br />
        </div>
        <p>Contact us: <a href='#'>healtLine@gmail.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;
