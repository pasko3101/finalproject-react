import { Link } from "react-router-dom";
import { categories } from "../../components/CategoriesSizesBrands";


const NewinCategories = () => {
  return (
    <div className="newIn__categories">
      <h3 className="newIn__categories__title">Categories</h3>
      <div className="newIn__categories__items">
        {categories.map((item, index) => (
          <Link to="/newIn" className="newIn__categories__item" key={index}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NewinCategories;
