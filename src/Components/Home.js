
import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./Home.css";



const images = ["bike.png", "black.png", "blue.png"];
const words = ["Elegance", "Minimalism", "Comfort"];
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Home() {
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [showPreBook, setShowPreBook] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return; // Ensure container exists before proceeding

    const handleMouseMove = (event) => {
      const { clientX } = event;
      const containerWidth = container.offsetWidth;
      const progress = clientX / containerWidth;

      const slides = container.querySelectorAll('.swiper-slide');
      const totalSlides = slides.length;

      if (totalSlides <= 1) return;

      let slideIndex = Math.floor(progress * totalSlides);

      if (slideIndex >= totalSlides) {
        slideIndex = 0;
      } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
      }

      const swiper = container.swiper;

      if (swiper) {
        swiper.slideTo(slideIndex);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, [containerRef.current]); // Trigger useEffect when containerRef.current changes

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = 90; // Adjust this value based on your actual header height
      const scrollTop = window.scrollY;
      setShowPreBook(scrollTop > headerHeight); // Show the Pre book button only when scrolled past the header
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="full-height">
      
      <div className="container">
        <div className="left-panel">
          <div className="front-line">
            <p>
              Let's Elevate Your Ride Experience With Rhyno – Where Superiority
              Meets <span className="dynamic-word">{words[wordIndex]}</span>.
            </p>
          </div>
        </div>
        <div className="right-panel">
          <div className="vehicle-photos" ref={containerRef}>
            {images.map((image, idx) => (
              <div key={idx} className={`slide ${idx === index ? "active" : ""}`}>
                <img src={`/Images/${image}`} alt={`Vehicle ${idx + 1}`} />
                <button className="checkout-button">Checkout</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-usp">
        <h1 className="heading">Our USP</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="swiper_container"
          loop={true}
        >
          <SwiperSlide>
            <div className="slide-content">
              <h2>LFP Battery</h2>
              <p>: Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
renowned for their safety features—eliminating the risk of fire associated with other
Lithium batteries. These batteries boast a broader temperature range, ideal for the
diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
by an Active Balancing Smart Battery Management System (BMS) for extended life
and reduced maintenance. Each battery undergoes rigorous waterproofing tests
according to IP76 standards. But it doesn't stop there—our technology goes the extra
mile in ensuring the battery's lasting durability. Connect with us to discover the
thoughtful engineering behind our batteries!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Wider tyres</h2>
              <p>Now, say goodbye to skidding and embrace the leaning turns!
Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
beast that ensures stability on different terrains such as wet roads, mud, and sand.
</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Range prediction</h2>
              <p>Many budget-friendly electric scooters overlook this crucial
feature, causing riders to experience range anxiety. With Rhyno, you can ride with
peace of mind, thanks to the scooter providing precise information about the
remaining battery.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Extraordinary Experience</h2>
              <p>Rhyno is more than just a mode of transportation. It is
an experience of sheer comfort and style! A seamless fusion of minimalism,
sophistication, and a touch of masculinity!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <h2>Rugged and Simple Design</h2>
              <p>We’ve had enough of the EVs looking and feeling like
fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
ending up spending weeks and months at service stations for complex repairs. We
took a bold step of making something raw, rugged, and practical. We kept it so
simple that even your trusted local mechanic can understand and repair most of it. If
you have reached this far, why not to take a test ride? Click here to locate your
nearest dealership or book a test ride at your home!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {showPreBook && (
        <Link to="/prebook" className="pre-book-button">Pre book</Link>
      )}
      
    </div>
  );
}


// import React, { useRef, useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper';
// import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import "./Home.css";

// import Navbar from "./Navbar";
// const images = ["bike.png", "black.png", "blue.png"];
// const words = ["Elegance", "Minimalism", "Comfort"];
// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

// export default function Home() {
//   const [index, setIndex] = useState(0);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const autoSlide = setTimeout(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearTimeout(autoSlide);
//   }, []);

//   return (
//     <div className="full-height">
//       <Navbar />
//       <div className="container">
//         <div className="left-panel">
//           <div className="front-line">
//             <p>
//               Let's Elevate Your Ride Experience With Rhyno – Where Superiority
//               Meets <span className="dynamic-word">{words[wordIndex]}</span>.
//             </p>
//           </div>
//         </div>
//         <div className="right-panel">
//           <div className="vehicle-photos">
//             <Swiper
//               effect={'coverflow'}
//               grabCursor={true}
//               centeredSlides={true}
//               slidesPerView={'auto'}
//               coverflowEffect={{
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 2.5,
//               }}
//               pagination={{ el: '.swiper-pagination', clickable: true }}
//               navigation={{
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//               }}
//               loop={true}
//             >
//               {images.map((image, idx) => (
//                 <SwiperSlide key={idx} className={`slide ${idx === index ? "active" : ""}`}>
//                   <img src={`/Images/${image}`} alt={`Vehicle ${idx + 1}`} />
//                   <button className="checkout-button">Checkout</button>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//       <div className="container-usp">
//         <h1 className="heading">Flower Gallery</h1>
//         <Swiper
//           effect={'coverflow'}
//           grabCursor={true}
//           centeredSlides={true}
//           slidesPerView={'auto'}
//           coverflowEffect={{
//             rotate: 0,
//             stretch: 0,
//             depth: 100,
//             modifier: 2.5,
//           }}
//           pagination={{ el: '.swiper-pagination', clickable: true }}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           className="swiper_container"
//           loop={true}
//         >
//           <SwiperSlide>
//             <div className="slide-content">
//               <h2>LFP Battery</h2>
//               <p>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries...</p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="slide-content">
//               <h2>Wider tyres</h2>
//               <p>Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast...</p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="slide-content">
//               <h2>Range prediction</h2>
//               <p>Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind...</p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="slide-content">
//               <h2>Extraordinary Experience</h2>
//               <p>Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity...</p>
//             </div>
//           </SwiperSlide>
//           <SwiperSlide>
//             <div className="slide-content">
//               <h2>Rugged and Simple Design</h2>
//               <p>We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations...</p>
//             </div>
//           </SwiperSlide>
//         </Swiper>
//       </div>
//     </div>
//   );
// }