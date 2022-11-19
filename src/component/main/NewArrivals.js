import zaraSuite from './picture/zara-suite.png';
import desigualDress from './picture/desigual-dress.png';
import zaraSkirt from './picture/zara-skirt.png';
import monkiCulottes from './picture/monki-culottes.png';
function NewArrivals(){
  return(
    <div className="main__cards">
      <div className="main__title">
        <p className="text__m_bold">New arrivals</p>
        <div></div>
      </div>
      <div className="main__card">
        <img src={zaraSuite} alt="zaraSuite" />
        <p className='text__m_bold subtitle'>ZARA</p>
        <span className="text__os_regular black">Patterned suite</span>
        <span className="text__os_regular black">$75.90</span>
      </div>
      <div className="main__card">
        <img src={desigualDress} alt="desigualDress" />
        <p className='text__m_bold subtitle'>Desigual</p>
        <span className="text__os_regular black">Ethnic dress with embroidery</span>
        <span className="text__os_regular black">$139.90</span>
      </div>
      <div className="main__card">
        <img src={zaraSkirt} alt="zaraSkirt" />
        <p className='text__m_bold subtitle'>ZARA</p>
        <span className="text__os_regular black">Patchwork mini skirt</span>
        <span className="text__os_regular black">$55.90</span>
      </div>
      <div className="main__card">
        <img src={monkiCulottes} alt="monkiCulottes" />
        <p className='text__m_bold subtitle'>Monki</p>
        <span className="text__os_regular black">Ultramarine culottes</span>
        <span className="text__os_regular black">$62.90</span>
      </div>
    </div>
  );
}
export default NewArrivals;