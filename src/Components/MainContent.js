import image1 from "../assets/image 1.jpg";
import image2 from "../assets/image 2.jpg";
import image3 from "../assets/image 3.jpg";
import image4 from "../assets/image 4.jpg";

const MainContent = ({ heroCount, setHeroCount, heroData }) => {
  return (
    <div>
      <div className="heroContainer">
        <div className="bgContainer">
          {heroCount === 0 && <img src={image1} className="background" />}
          {heroCount === 1 && <img src={image2} className="background" />}
          {heroCount === 2 && <img src={image3} className="background" />}
          {heroCount === 3 && <img src={image4} className="background" />}
        </div>
        <div className="text">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
        <div className="heroDotPlay">
          <ul className="heroDots">
            <li
              onClick={() => setHeroCount(0)}
              className={heroCount === 0 ? "heroDot orange" : "heroDot"}
            ></li>
            <li
              onClick={() => setHeroCount(1)}
              className={heroCount === 1 ? "heroDot orange" : "heroDot"}
            ></li>
            <li
              onClick={() => setHeroCount(2)}
              className={heroCount === 2 ? "heroDot orange" : "heroDot"}
            ></li>
            <li
              onClick={() => setHeroCount(3)}
              className={heroCount === 3 ? "heroDot orange" : "heroDot"}
            ></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
