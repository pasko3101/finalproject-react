import newBalance from "./picture/new-balance.svg";
import drMartens from "./picture/dr-martens.svg";
import converse from "./picture/converse.svg";
import steveMadden from "./picture/steve-madden.svg";
import uggAustralia from "./picture/ugg-australia.svg";
function Brends() {
  return (
    <div className="footer__brends">
      <img src={newBalance} alt="newBalance" />
      <img src={drMartens} alt="drMartens" />
      <img src={converse} alt="converse" />
      <img src={steveMadden} alt="steveMadden" />
      <img src={uggAustralia} alt="uggAustralia" />
      <a href="#" className="text__os_regular bl">All brands</a>
    </div>
  );
}
export default Brends;
