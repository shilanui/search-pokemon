import { IAttack, IPokemonStat } from "@/type/pokemon";
import React from "react";

const TableStat = ({ data }: IPokemonStat | any) => {
  return (
    <div className="l-inner">
      {data && (
        <table>
          <tr>
            <th>Name</th>
            <td>{data?.name}</td>
          </tr>
          <tr>
            <th>Number</th>
            <td>{data?.number}</td>
          </tr>
          <tr>
            <th>Class</th>
            <td>{data?.classification}</td>
          </tr>
          <tr>
            <th>Max CP</th>
            <td>{data?.maxCP}</td>
          </tr>
          <tr>
            <th>Max HP</th>
            <td>{data?.maxHP}</td>
          </tr>
          <tr>
            <th>Type</th>
            <td>{data?.types?.map((t: string) => `${t}`).join(", ")}</td>
          </tr>
          <tr>
            <th>Weaknesses</th>
            <td>{data?.weaknesses?.map((t: string) => `${t}`).join(", ")}</td>
          </tr>
          <tr>
            <th>Resistant</th>
            <td>{data?.resistant?.map((t: string) => `${t}`).join(", ")}</td>
          </tr>
          <tr>
            <th>Height</th>
            <td>
              <p>maximum : {data?.height?.maximum}</p>
              <p>minimum : {data?.height?.minimum}</p>
            </td>
          </tr>
          <tr>
            <th>Weight</th>
            <td>
              <p>maximum : {data?.weight?.maximum}</p>
              <p>minimum : {data?.weight?.minimum}</p>
            </td>
          </tr>
          <tr>
            <th>Attack (Fast)</th>
            <td>
              {data?.attacks?.fast?.map((af: IAttack, i: number) => {
                return (
                  <div key={i} style={{ paddingBottom: "1rem" }}>
                    <p>Name : {af?.name}</p>
                    <p>Type : {af?.type}</p>
                    <p>Damage : {af?.damage}</p>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr>
            <th>Attack (Special)</th>
            <td>
              {data?.attacks?.special?.map((af: IAttack, i: number) => {
                return (
                  <div key={i} style={{ paddingBottom: "1rem" }}>
                    <p>Name : {af?.name}</p>
                    <p>Type : {af?.type}</p>
                    <p>Damage : {af?.damage}</p>
                  </div>
                );
              })}
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default TableStat;
