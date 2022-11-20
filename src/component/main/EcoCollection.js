import image236 from "./picture/image236.png";
function EcoCollection() {
  return (
    <div className="main__pictures">
      <div className="main__exclusively">
        <h3 className="text__m_bold title">
          Eco Aware brands: Exclusively at Dresnote
        </h3>
        <p className="text__os_regular text">
          Science Story is a collaboration between Dressnote and creative
          thinkers, researchers and brands who are developing cutting-edge
          materials designed to address the environmental impacts of the textile
          industry.
        </p>
        <button className="button">Shop Eco collection</button>
      </div>
      <img src={image236} alt="image236" />
    </div>
  );
}
export default EcoCollection;
