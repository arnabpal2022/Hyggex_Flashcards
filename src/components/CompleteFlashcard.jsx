import React from "react";
import FlashcardArray from "./FlashcardArray";
import CardContent from "./CardContent";

function CompleteFlashcard() {
  const cards = [
    {
      id: 1,
      frontHTML: <CardContent content = "9 + 6 + 7x - 2x - 3"/>,
      backHTML: <>5x - 12</>,
    },
    {
      id: 2,
      frontHTML: <CardContent content = "9 + 6 + 7x - 2x - 3"/>,
      backHTML: <>5x - 12</>,
    },
    {
      id: 3,
      frontHTML: <CardContent content = "9 + 6 + 7x - 2x - 3"/>,
      backHTML: <>Albany</>,
    },
  ];

  return (
    <>
      <div className="inter font-bold text-3xl pt-6   ">
        <FlashcardArray
          cards={cards}
          frontCardStyle={{
            backgroundImage:
              "linear-gradient(to bottom left, #051A91, #061C93 17%, #2284F1 80%, #1F80EB 100%)",
            color: "white",
            borderRadius: "42px",
          }}
          backCardStyle={{
            backgroundImage:
              "linear-gradient(to top left, #051A91, #061C93 17%, #2284F1 80%, #1F80EB 100%)",
            color: "white",
            borderRadius: "42px",
          }}
          frontContentStyle={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
          }}
          backContentStyle={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    </>
  );
}

export default CompleteFlashcard;
