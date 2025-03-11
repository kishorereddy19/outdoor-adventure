import { useState, useEffect } from "react";

export default function ImageConveyorBelt({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = 3;
  const totalSlides = images.length;


//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Auto-scroll every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
//   };

  return (
    <div className="relative overflow-hidden">
      {/* Image container */}
      <div
        className="flex gap-3 transition-transform duration-500 -translate-x-[100%]"
        // style={{ transform: `translateX(-${currentIndex  * (100 / 3)}%)` }}
      >
        {images.concat(images).map((src, index) => ( // Duplicate images for infinite effect
          <img key={index} src={src} alt={`Image ${index + 1}`} className={`p-6 w-[100%] md:w-1/2 lg:w-[33.33%] flex-shrink-0`} />
        ))}
      </div>

      {/* Navigation buttons */}
      {/* <button onClick={prevSlide} className="absolute left-0 top-1/2 bg-gray-800 text-white p-2 rounded">⬅</button>
      <button onClick={nextSlide} className="absolute right-0 top-1/2 bg-gray-800 text-white p-2 rounded">➡</button> */}

      {/* Dots navigation */}
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex % totalSlides === index ? "bg-pink-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}