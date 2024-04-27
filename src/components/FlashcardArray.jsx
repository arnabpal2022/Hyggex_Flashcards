import React, { useCallback, useEffect, useState } from "react";
import { Flashcard } from "react-quizlet-flashcard";
import "./FlashcardArray.scss";

import { TbReload } from "react-icons/tb";
import { RiFullscreenFill } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function FlashcardArray({
  cards,
  controls = true,
  showCount = true,
  onCardChange = () => {},
  onCardFlip = () => {},
  frontCardStyle = {},
  frontContentStyle = {},
  backCardStyle = {},
  backContentStyle = {},
  forwardRef = { current: null },
  FlashcardArrayStyle = {},
  currentCardFlipRef,
  cycle = false,
}) {
  const [cardNumber, setCardNumber] = useState(0);
  const [cardsInDisplay, setCardsInDisplay] = useState(
    !cycle ? [-1, 0, 1] : [cards.length - 1, 0, 1]
  );
  const [isOverFlow, setIsOverFlow] = useState("");

  const placeFillerCard = (
    <Flashcard
      className="FlashcardArrayWrapper__empty"
      width="100%"
      backHTML=""
      frontHTML=""
    />
  );

  const cardsList = cards.map((card, index) => (
    <Flashcard
      key={index}
      frontHTML={card.frontHTML}
      backHTML={card.backHTML}
      manualFlipRef={
        cardNumber === index ? currentCardFlipRef : { current: null }
      }
      frontCardStyle={{ ...card.frontCardStyle, ...frontCardStyle }}
      frontContentStyle={{ ...card.frontContentStyle, ...frontContentStyle }}
      backCardStyle={{ ...card.backCardStyle, ...backCardStyle }}
      backContentStyle={{ ...card.backContentStyle, ...backContentStyle }}
      className={card.className}
      height={card.height || "100%"}
      width={card.width || "100%"}
      style={card.style}
      onCardFlip={(state) => {
        onCardFlip(card.id, index, state);
        setIsOverFlow("hidden");
        setTimeout(() => {
          setIsOverFlow("");
        }, 3);
      }}
    />
  ));

  const numberOfCards =
    cardsList.length !== undefined ? cardsList.length - 1 : 0;

  const resetArray = () => {
    setCardsInDisplay(!cycle ? [-1, 0, 1] : [cards.length - 1, 0, 1]);
    setCardNumber(0);
  };

  const nextCard = useCallback(() => {
    const currentCardNumber =
      cardNumber + 1 < numberOfCards ? cardNumber + 1 : numberOfCards;

    if (currentCardNumber < numberOfCards) {
      setIsOverFlow("hidden");
      setTimeout(() => {
        setIsOverFlow("");
      }, 90);
    }
    if (cycle) {
      setCardsInDisplay((prevState) => {
        setCardNumber(prevState[1] + 1 < cards.length ? prevState[1] + 1 : 0);
        return [
          prevState[0] + 1 < cards.length ? prevState[0] + 1 : 0,
          prevState[1] + 1 < cards.length ? prevState[1] + 1 : 0,
          prevState[2] + 1 < cards.length ? prevState[2] + 1 : 0,
        ];
      });
    } else {
      setCardNumber(currentCardNumber);
      setCardsInDisplay(
        currentCardNumber < numberOfCards
          ? [currentCardNumber - 1, currentCardNumber, currentCardNumber + 1]
          : [numberOfCards - 1, numberOfCards, -1]
      );
    }

    onCardChange(cards[currentCardNumber].id, currentCardNumber + 1);
  }, [cardNumber, cycle, numberOfCards]);

  const prevCard = useCallback(() => {
    const currentCardNumber = cardNumber - 1 >= 0 ? cardNumber - 1 : 0;

    if (currentCardNumber !== 0) {
      setIsOverFlow("hidden");
      setTimeout(() => {
        setIsOverFlow("");
      }, 90);
    }

    if (cycle) {
      setCardsInDisplay((prevState) => {
        const activeCard =
          prevState[1] - 1 < 0 ? cards.length - 1 : prevState[1] - 1;

        setCardNumber(
          prevState[1] - 1 >= 0 ? prevState[1] - 1 : cards.length - 1
        );

        return [
          activeCard - 1 < 0 ? cards.length - 1 : activeCard - 1,
          activeCard,
          activeCard + 1 < cards.length ? activeCard + 1 : 0,
        ];
      });
    } else {
      setCardNumber(currentCardNumber);
      setCardsInDisplay(
        currentCardNumber === 0
          ? [-1, 0, 1]
          : [currentCardNumber - 1, currentCardNumber, currentCardNumber + 1]
      );
    }
    onCardChange(cards[currentCardNumber].id, currentCardNumber + 1);
  }, [cardNumber, cycle, numberOfCards]);

  useEffect(() => {
    if (forwardRef.current) {
      forwardRef.current.nextCard = nextCard;
      forwardRef.current.prevCard = prevCard;
      forwardRef.current.resetArray = resetArray;
    }
  });

  return (
    <div className="FlashcardArrayWrapper" style={FlashcardArrayStyle}>
      <div
        className="FlashcardArrayWrapper__CardHolder"
        style={{ overflow: isOverFlow }}
      >
        {cardsInDisplay[0] !== -1
          ? cardsList[cardsInDisplay[0]]
          : placeFillerCard}
        {cardsList[cardsInDisplay[1]]}
        {cardsInDisplay[2] !== -1
          ? cardsList[cardsInDisplay[2]]
          : placeFillerCard}
      </div>

      {(controls || showCount) && (
        <div className="flex justify-between items-center w-10/12">
          <div className="text-blue-800"><TbReload/></div>
          <div className="FlashcardArrayWrapper__controls">
            {controls && (
              <button onClick={() => prevCard()} className="rounded-full">
                <FaAngleLeft />
              </button>
            )}
            {showCount && (
              <span className="FlashcardArrayWrapper__controls--count font-bold">
                {cardNumber + 1}/{cardsList.length}
              </span>
            )}
            {controls && (
              <button onClick={() => nextCard()}>
                <FaAngleRight />
              </button>
            )}
          </div>
          <div className="text-blue-800"><RiFullscreenFill/></div>
        </div>
      )}
    </div>
  );
}

export default FlashcardArray;
