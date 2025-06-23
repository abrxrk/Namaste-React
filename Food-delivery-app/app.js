import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="img-logo">
        <img
          className="img"
          alt="img-logo"
          src="https://do6gp1uxl3luu.cloudfront.net/banner+and+logos/name.webp"
        />
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

const ResCard = () => {
  return (
    <div className="kfc">
      <img
        className="kfc-logo"
        alt="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/0dbbc14f-84a2-4916-98eb-ca06adb3fe97_16059.JPG"
      ></img>
      <h3>KFC</h3>
    </div>
  );
};

const Search = () => {
    return (
        <div className="search">
            <div className="search bar">
                <input></input>
                <button>Search</button>
            </div>
        </div>
    )
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search/>
      </div>
      <div className="res-card">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />

      </div>
    </div>
  );
};

const Footer=()=> {
    return (
        <div className="footer">
            <footer></footer>
        </div>
    )
}
const AppLayout = () => {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
