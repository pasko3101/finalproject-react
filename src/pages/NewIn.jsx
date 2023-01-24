import React, { useEffect } from "react";
import { getClothing } from "../api/WomenClothing";
import {
  clothingLoadingFailed,
  clothingLoadingSuccess,
  clothingLoading,
} from "../store/actions/clothingAction";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import picNewIn from "../img/newIn.png";
import { Loader } from "../components/Loader";
import { sizes, brands } from "../components/SizesBrands";
import NewinCategories from "./newIn/NewinCategories";
import NewinBlock from "./newIn/NewinBlock";
import NewinColor from "./newIn/NewinColor";
import NewinPrice from "./newIn/NewinPrice";
import NetworkError from "../img/networkError.gif";
const NewIn = () => {
  const dispatch = useDispatch();
  const { loading, error, clothing } = useSelector((store) => store.clothing);

  useEffect(() => {
    dispatch(clothingLoading());
    getClothing()
      .then(({ data }) => {
        dispatch(clothingLoadingSuccess(data));
      })
      .catch((error) => {
        dispatch(clothingLoadingFailed(error.message));
      });
  }, [dispatch]);

  return (
    <div className="newIn__wrap">
      <div className="newIn__contain">
        <div className="newIn__bars">
          <div className="newIn_item">
            <NewinCategories />
            <NewinBlock item={sizes} title="Size" />
            <NewinColor />
            <NewinBlock item={brands} title="Brand" />
            <NewinPrice />
            <button className="newIn__more_btn">More filters</button>
          </div>
        </div>
        <div className="newIn__inner">
          <div className="picNewIn__wrap">
            <h2 className="picNewIn__title">New in</h2>
            <p className="picNewIn__subtitle">
              This season, inside is cancelled
            </p>
            <img src={picNewIn} alt="picNewIn" className="picNewIn__item" />
          </div>
          <div className="slider__titleNewIn-wrapp">
            <button className="slider__title mb__null">New In</button>
          </div>
          <div className="newIn__sub">
            <p className="newIn__sub_text">1403 items</p>
            <p className="newIn__sub_text">Sort by: Price Low-High</p>
          </div>
          <div className="cards__contain">
            <div className="cards__wrapp">
              {loading ? (
                <Loader />
              ) : (
                clothing &&
                clothing.map((item) => {
                  return (
                    <Cards value={item} key={`clothing__${item.id}`}></Cards>
                  );
                })
              )}
              {error && (
                <div className="networkerror__contain">
                  <img
                    src={NetworkError}
                    alt="NetworkError"
                    className="networkerror__item"
                  />
                  <p>Not found</p>
                </div>
              )}
            </div>
          </div>
          <div className="newIn__more">
            <p className="newIn__more_text border_bm">
              You’ve viewed 12 of 1403 products
            </p>
            <button className="newIn__more_btn"> Load more</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewIn;
