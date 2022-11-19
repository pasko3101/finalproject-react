import vintageSuit from './picture/vintage-suit.png';
import bakerSuit from './picture/baker-suit.png';
import monkiDress from './picture/monki-dress.png';
import peopleDress from './picture/people-dress.png';
function OurPicks (){
  return(
    <div className="main__cards">
      <div className="main__title">
        <p className="text__m_bold">Our picks for you</p>
        <div></div>
      </div>
      <div className="main__card">
        <img src={vintageSuit} alt="vintageSuit" />
        <p className='text__m_bold subtitle'>Reclaimed Vintage</p>
        <span className="text__os_regular black">Lounge style pleated suit</span>
        <span className="text__os_regular black">$82.90</span>
      </div>
      <div className="main__card">
        <img src={bakerSuit} alt="bakerSuit" />
        <p className='text__m_bold subtitle'>Ted Baker</p>
        <span className="text__os_regular black">Cropped suit in pink</span>
        <span className="text__os_regular black">$36.90</span>
      </div>
      <div className="main__card">
        <img src={monkiDress} alt="monkiDress" />
        <p className='text__m_bold subtitle'>Monki</p>
        <span className="text__os_regular black">Fine knit mini dress</span>
        <span className="text__os_regular black">$42.00</span>
      </div>
      <div className="main__card">
        <img src={peopleDress} alt="peopleDress" />
        <p className='text__m_bold subtitle'>People tree</p>
        <span className="text__os_regular black">Printed mini shirt dress</span>
        <span className="text__os_regular black">$35.90 $51.90</span>
      </div>
    </div>
  );
}
export default OurPicks;