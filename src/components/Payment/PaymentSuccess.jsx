import React from "react";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });

  return (
    <div>
      <div className="payment-success-container">
        <Confetti width={width} height={height} numberOfPieces={450} />
        <div className="heading-primary">congrats!</div>
        <div className="message">
          Stripe has successfully processed your payment
        </div>
        <div
          className="back-to-home"
          onClick={() => {
            setTimeout(() => {
              history.push("/");
            }, 100);
          }}
        >
          Back to Home
        </div>
      </div>
    </div>
  );
};
