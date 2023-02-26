import React from "react";
import Image from "next/image";

type ICard = {
  img: string;
  name: string;
  number: string;
  classification: string;
};

const Card = ({ img, name, number, classification }: ICard) => {
  const goToDetail = () => {
    alert("Detail");
  };
  return (
    <li className="cards_item">
      <div className="card">
        <div className="card_image">
          <Image src={img} alt={number} width={300} height={100} priority />
        </div>
        <div className="card_content">
          <h2 className="card_title">
            {name} : {number}
          </h2>
          <p className="card_text">Class : {classification}</p>
          <button className="btn card_btn" onClick={() => goToDetail()}>
            Pokemon Details
          </button>
        </div>
      </div>
    </li>
  );
};

export default Card;
