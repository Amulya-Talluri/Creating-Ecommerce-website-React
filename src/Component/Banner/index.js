import "./index.css"

const Banner = () => (
  <div className="banner-container">
    <div className="text-container">
      <h1>
        The CHRISTMAS SALE
        <br />
        is now back!
      </h1>
      <p>
        Get your favourite device at an unbeleivable price and win many cool
        surprises <br />
        Christmas Discounts available on all gadgets from just Rs.299 only
      </p>
      <button className="btn">Explore Now</button>
    </div>
    <img
      src="https://res.cloudinary.com/dsf2gec5l/image/upload/v1675318909/WebDev/E-commerce%20project/12.12_Sale-bro_bxndce.png"
      alt="banner"
       className="banner-image"
    />
  </div>
);

export default Banner;