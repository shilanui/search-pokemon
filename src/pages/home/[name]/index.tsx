import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { queryName } from "@/query/pokemon";
import Image from "next/image";
import Loading from "@/components/Loading";
import TableStat from "@/components/TableStat";
import { IPokemonStat } from "@/type/pokemon";

const Detail = () => {
  const router = useRouter();
  const params = router.query;

  const [getPokemon, { data }] = useLazyQuery(queryName, {
    variables: { name: params?.name },
  });

  useEffect(() => {
    if (params?.name) getPokemon();
  }, [getPokemon, params?.name]);

  return (
    <div className="container">
      {data?.pokemon ? (
        <>
          <div
            className="grid-wrapper"
            style={{
              paddingTop: "10rem",
            }}
          >
            <div className="section1">
              <Image
                src={data?.pokemon?.image}
                alt={data?.pokemon?.number}
                width={400}
                height={400}
              />
            </div>
            <div className="section2">
              <TableStat data={data?.pokemon} />
            </div>
          </div>
          {data?.pokemon?.evolutions?.length > 0 && (
            <>
              <h1
                style={{
                  paddingTop: "2rem",
                }}
              >
                Evolutions ({data?.pokemon?.evolutions?.length})
              </h1>
              {data?.pokemon?.evolutions?.map(
                (evo: IPokemonStat, j: number) => {
                  return (
                    <div
                      className="grid-wrapper"
                      style={{
                        paddingTop: "2rem",
                      }}
                      key={j}
                    >
                      <div className="section1">
                        <Image
                          src={evo?.image}
                          alt={evo?.number}
                          width={400}
                          height={400}
                        />
                      </div>
                      <div className="section2">
                        <TableStat data={evo} />
                      </div>
                    </div>
                  );
                }
              )}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Detail;
