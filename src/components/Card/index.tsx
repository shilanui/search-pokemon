import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { ICard } from "@/type/pokemon";

const Card = ({
  img,
  name,
  number,
  classification,
  attack,
  specialAttack,
}: ICard) => {
  const router = useRouter();

  const goToDetail = (name: string) => {
    router.push(`home/${name}`);
  };

  return (
    <li className="cards_item">
      <div className="card pointer" onClick={() => goToDetail(name)}>
        <div className="card_image">
          <Image src={img} alt={number} width={300} height={100} />
        </div>
        <div className="card_content">
          <h2 className="card_title">
            {name} : {number}
          </h2>
          <p className="card_text">Class : {classification}</p>

          <div className="inline">
            <div>
              <h3 className="card_title">Attack</h3>
              <ul className="no-bullet">
                <li style={{ marginLeft: "0.5rem" }}>
                  {attack &&
                    attack?.map((atk, i: number) => {
                      return (
                        <p className="text-skill" key={i}>
                          {atk.name}
                        </p>
                      );
                    })}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="card_title">Special Attack</h3>
              <ul className="no-bullet">
                <li style={{ marginLeft: "0.5rem" }}>
                  {specialAttack &&
                    specialAttack?.map((atk, i: number) => {
                      return (
                        <p className="text-skill" key={i}>
                          {atk.name}
                        </p>
                      );
                    })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
