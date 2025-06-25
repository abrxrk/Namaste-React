import  {LOGO_URL } from "../utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="img-logo">
        <img className="img" alt="img-logo" src={LOGO_URL} />
      </div>
      <div className="info">
        <ul className="contact">
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
