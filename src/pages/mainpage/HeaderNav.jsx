import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { GrSearch } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getClothing } from "../../api/WomenClothing";
import {
  clothingLoading,
  clothingLoadingSuccess,
  clothingLoadingFailed,
} from "../../store/actions/clothingAction";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { clothing } = useSelector((store) => store.clothing);
  const dispatch = useDispatch();
  useEffect(() => {
    if (clothing.length === 0) {
      dispatch(clothingLoading());
      getClothing()
        .then(({ data }) => {
          dispatch(clothingLoadingSuccess(data));
        })
        .catch((error) => {
          dispatch(clothingLoadingFailed(error.message));
        });
    }
  }, []);
  const closeSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  };
  const searchDis = (e) => {
    setSearchInput(e.target.value);
    const filteredData = clothing.filter((item) => {
      if (e.target.value === "") {
        return null;
      }
      if (item.title.toLowerCase().includes(e.target.value.toLowerCase())) {
        return item;
      }
    });
    if (filteredData.length === 0 && e.target.value.length !== 0) {
      setSearchResult([
        {
          title: "No data",
        },
      ]);
    } else {
      setSearchResult(filteredData);
    }
  };
  return (
    <form className="header__search">
        <GrSearch className="header__search__item" />
      <input
        name="header__search"
        type="search"
        placeholder="Search for..."
        className="header__search__input"
        onChange={searchDis}
        value={searchInput}
      />
      {!!searchResult.length && (
        <div className="header__search__res">
          {searchResult.map(({ title, id }, index) => {
            return !!id ? (
              <Link
                className="card__tdn"
                to={`product/${id}`}
                onClick={closeSearch}
                key={`srch_${index}`}
              >
                <p className="header__search__resItem">{title}</p>
              </Link>
            ) : (
              <p key={`srch_${index}`} className="header__search__resItem">
                {title}
              </p>
            );
          })}
        </div>
      )}
    </form>
  );
};
const HeaderNav = () => {
  return (
    <div className="header__nav">
      <div className="header__nav__container">
        <nav className="header__navbar">
          <NavLink to="/newIn" className="header__navbar__link">
            New in <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Clothing <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Shoes <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Accessories <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Brands <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
          <NavLink to="/" className="header__navbar__link">
            Sale <FiChevronDown className="header__navbar__arrow" />
          </NavLink>
        </nav>
        <SearchBar />
      </div>
    </div>
  );
};

export default HeaderNav;
