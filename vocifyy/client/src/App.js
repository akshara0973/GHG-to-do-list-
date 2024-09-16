import React from 'react';
import './home.css'; // Include your CSS file

function Header() {
  return (
    <section id="header">
      <a href="#"><img src="/img/logo.jpeg" className="logo" alt="Logo" /></a>
      <div>
        <ul id="navbar">
          <li><a className="active" href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Become a seller</a></li>
          <li><a href="#"><i className="fas fa-shopping-bag"></i></a></li>
        </ul>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <div className="offer-container">
      <div className="text-content">
        <p>Trade-in-offer</p>
        <h1>Super value deals</h1>
        <h2>On all products</h2>
        <p>Save more with coupons & up to 70% off!</p>
        <button>Shop Now</button>
      </div>
      <div className="image-content">
        <img src="/img/bggp.jpg" alt="Product" />
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="feature-cards">
      <div className="card">
        <img src="/img/1.png" alt="Free Shipping" />
        <p className="title">Free Shipping</p>
      </div>
      <div className="card">
        <img src="/img/2.jpg" alt="Online Order" />
        <p className="title">Online Order</p>
      </div>
      <div className="card">
        <img src="/img/3.png" alt="Save Money" />
        <p className="title">Save Money</p>
      </div>
      <div className="card">
        <img src="/img/4.png" alt="Promotions" />
        <p className="title">Promotions</p>
      </div>
      <div className="card">
        <img src="/img/5.jpg" alt="Happy Sell" />
        <p className="title">Happy Sell</p>
      </div>
      <div className="card">
        <img src="/img/6.jpg" alt="24/7 Support" />
        <p className="title">24/7 Support</p>
      </div>
    </div>
  );
}

function ProductSection({ products, sectionTitle }) {
  return (
    <section className="section-p1">
      <h2>{sectionTitle}</h2>
      <div className="pro-container">
        {products.map((product, index) => (
          <div className="pro" key={index}>
            <img src={product.image} alt={product.name} />
            <div className="des">
              <h5>{product.name}</h5>
              <div className="star">
                {Array(5).fill().map((_, i) => <i key={i} className="fas fa-star"></i>)}
              </div>
              <h4>Rs {product.price}</h4>
            </div>
            <a href="#" className="cart"><i className="fas fa-shopping-cart"></i></a>
          </div>
        ))}
      </div>
    </section>
  );
}

function BannerSection() {
  return (
    <section id="banner" className="section-m1">
      <h4>Exclusive Vocify Offers</h4>
      <h2>Up to <span>70% off</span> All products</h2>
      <button className="normal">Explore More</button>
    </section>
  );
}

function Newsletter() {
  return (
    <section id="newsletter" className="section-p1 section-m1">
      <div className="newstext">
        <h4>Sign Up For Newsletter</h4>
        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
      </div>
      <div className="form">
        <input type="text" placeholder="Your email address" />
        <button>Sign Up</button>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="section-p1">
      <div className="col">
        <img src="/img/logo.png" alt="Logo" />
        <h4>Contact</h4>
        <p><strong>Address: </strong>562 Wellington Road, Street 32, India</p>
        <p><strong>Phone:</strong> +78098643245 / +8976543654</p>
        <p><strong>Hours:</strong> 10:00-10:00, Mon-Sat</p>
        <div className="follow">
          <h4>Follow Us</h4>
          <div className="icon">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-pinterest-p"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
      <div className="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms and Conditions</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}

export default function App() {
  const featuredProducts = [
    { image: '/img/rangoli.jpeg', name: 'Rangoli Design', price: 78 },
    { image: '/img/p12.jpeg', name: 'Shawl', price: 200 },
    { image: '/img/p15.jpeg', name: 'Handmade Bags', price: 30 },
    { image: '/img/p7.jpeg', name: 'Scented Candle', price: 90 },
    { image: '/img/p10.jpeg', name: 'Mop', price: 20 },
    { image: '/img/p11.jpeg', name: 'Duster', price: 15 },
    { image: '/img/p8.jpeg', name: 'Jewellery Box', price: 200 },
    { image: '/img/p13.jpeg', name: 'Turmeric', price: 120 },
  ];

  const newArrivals = [
    { image: '/img/f11.jpg', name: 'T-shirts', price: 200 },
    { image: '/img/c22.jpg', name: 'Diy Kits', price: 70 },
    { image: '/img/p5.jpeg', name: 'Diyas', price: 50 },
    { image: '/img/c7.jpg', name: 'Cups', price: 100 },
    { image: '/img/C100.jpg', name: 'Pottery Making', price: 80 },
    { image: '/img/s.jpeg', name: 'Scarf', price: 50 },
    { image: '/img/slip.jpg', name: 'Bamboo Slipper', price: 100 },
    { image: '/img/pur.jpg', name: 'Ladies Purse', price: 70 },
  ];

  return (
    <>
      <Header />
      <OfferSection />
      <FeatureCards />
      <ProductSection sectionTitle="Featured Products" products={featuredProducts} />
      <BannerSection />
      <ProductSection sectionTitle="New Arrivals" products={newArrivals} />
      <Newsletter />
      <Footer />
    </>
  );
}
