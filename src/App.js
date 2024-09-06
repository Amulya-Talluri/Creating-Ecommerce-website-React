import { Component } from "react";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import "./App.css"
import ProductItem from "./Component/ProductItem";

const dealsList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675338365/WebDev/E-commerce%20project/Apple-iPhone-13-Pro-Smartphones-491997738-i-2-1200Wx1200H_uwvjfa.jpg",
    name: "Iphone 13 Pro Max",
    brand: "Apple",
    price: 93000
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675338380/WebDev/E-commerce%20project/apple-iphone-14-plus.primaryproductimage.code-MDAwMDAwMDAwMDAwMDIzMDc4.format-hardware-configurator-l_ntimk6.png",
    name: "Iphone 14",
    brand: "Apple",
    price: 97000
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675338392/WebDev/E-commerce%20project/samsung-galaxy-s23-5g-front-1_tujvpf.jpg",
    name: "Samsung Galaxy S23",
    brand: "Samsung",
    price: 65000
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675338423/WebDev/E-commerce%20project/Galaxy-flip4-graphite-3-600x600_j2bueg.jpg",
    name: "New Galaxy Z Flip3",
    brand: "Samsung",
    price: 90000
  }
]

const allProductsList = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339740/WebDev/E-commerce%20project/MuffsA1200x1200Black1_npxidt.jpg",
    name: "Portronics Headset",
    brand: "Portronics",
    price: 1699
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339796/WebDev/E-commerce%20project/rockerz-518-blue_600x_rg4g3f.png",
    name: "Boat Rockers",
    brand: "Boat",
    price: 1599
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339830/WebDev/E-commerce%20project/b789488955522f13ffb4778bd08465c6_sypk0i.jpg",
    name: "Sony Headphones",
    brand: "Sony",
    price: 1899
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339870/WebDev/E-commerce%20project/3_580x_xppdhg.jpg",
    name: "Wireless Earphones",
    brand: "Ptron",
    price: 1200
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339902/WebDev/E-commerce%20project/F35A5694-B3FF-6ABF-BAF8-F1C749509D5B_800x800_85_y0rc7r.jpg",
    name: "Mi Smartband",
    brand: "MI",
    price: 1550
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339936/WebDev/E-commerce%20project/pvm_03_17897_1576827955_xo3diw.jpg",
    name: "Xiaomi Mi Smart Band",
    brand: "Xiaomi",
    price: 1200
  },
  {
    id: 7,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339968/WebDev/E-commerce%20project/41U5DQGLW8S._AC__m6wcfb.jpg",
    name: "Sounce Airpods",
    brand: "Sounce",
    price: 1350
  },
  {
    id: 8,
    imageUrl:
      "https://res.cloudinary.com/dsf2gec5l/image/upload/v1675339997/WebDev/E-commerce%20project/103_mintgreen_600x_k8czn4.png",
    name: "Boat wired earphones",
    brand: "Boat",
    price: 799
  }
];

 class App extends Component {
     render() {
          return (
            <div>
              <div className="header">
              <Navbar />
              <Banner />
              </div>

              <div className="products-section">
                <h2 className="title">Deals of the Day</h2>
                <ul className="products-row-list">
                 {dealsList.map((eachObj) => <ProductItem product={eachObj} key={eachObj.id}/> )}
                </ul>
              </div>

              <div  className="products-section"> 
                <h2 className="title">All Products</h2>
                <ul className="products-row-list">
                  {allProductsList.map((eachObj) => <ProductItem  product = {eachObj}  key={eachObj.id}/>)}
                </ul>
              </div>

              <Footer />
            </div>
          )
     }
 }

 export default App;