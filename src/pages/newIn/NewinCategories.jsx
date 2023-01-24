import { Link } from "react-router-dom";

const NewinCategories = () => {
  return (
    <div className="newIn__categories">
      <h3 className="newIn__categories__title">Categories</h3>
      <div className="newIn__categories__items">
        {[
          "Jackets & Outwear",
          "Tops",
          "T-shirts",
          "Shirts & Blouses",
          "Dresses",
          "Jeans & Trousers",
          "Skirts & Shorts",
          "Jeans & Trousers",
          "Skirts & Shorts",
        ].map((item, index) => (
          <Link to="/newIn" className="newIn__categories__item" key={index}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewinCategories;
