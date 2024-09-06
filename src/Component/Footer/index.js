import "./index.css";

const Footer = () => (
  <div className="footer">
    <div className="row">
      <div className="footer-col-1">
        <h3>Download Our App</h3>
        <p>Download App for Android and Ios mobile phone.</p>
        <div className="app-logo">
          <img
            src="https://helios-i.mashable.com/imagery/articles/04EZglaVzAW19V6FIiDD3TA/images-1.fit_lim.size_376x.png"
            alt="play store"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/1024px-App_Store_%28iOS%29.svg.png"
            alt="app store"
          />
        </div>
      </div>
      <div className="footer-col-2">
        <img
          src="https://res.cloudinary.com/dsf2gec5l/image/upload/v1675319061/WebDev/E-commerce%20project/logo1_v1qqoj.webp"
          alt="website logo"
        />
        <p>
          More ways to shop: Find a retailer near you. Or call 11111 000 888.
        </p>
      </div>
      <div className="footer-col-3">
        <h3>Useful links</h3>
        <ul>
          <li>Coupons</li>
          <li>Blog Post</li>
          <li>Return Policy</li>
          <li>Join Affiliate</li>
        </ul>
      </div>
      <div className="footer-col-4">
        <h3>Follow Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
    <hr />
    <p className="copyright">
      Copyright © 2023 Spark Inc. All rights reserved.
    </p>
  </div>
);

export default Footer;
