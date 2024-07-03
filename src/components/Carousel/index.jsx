import styles from "./Carousel.module.css"
import { useState } from "react";
import TokenCard from "../TokenCard";

function Carousel({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? cards.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === cards.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return(
    <div className={styles.carousel}>
      <button onClick={goToPrevious}>Previous</button>
      <div className={styles.carouselContainer}>
        {cards.map((card, index) => (
          <div
            key={index}
            style={{transform: `translateX(-${currentIndex * 100}%)`}}
          >
            <TokenCard 
              ticker= {card.ticker}
              chain= {card.chain}
              price= {card.price}
              ido_date= {card.ido_date}
              tge= {card.tge}
              cliff= {card.cliff}
              vesting= {card.vesting}
            />
          </div>
        ))}
      </div>
      <button onClick={goToNext}>Next</button>
    </div>
  );
}

export default Carousel;
