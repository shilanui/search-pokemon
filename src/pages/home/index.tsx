import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { queryAll, queryName } from "@/query/pokemon";
import { IPokemonRes } from "@/type/pokemon";
import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Search from "../../components/Search";

const Home = () => {
  const [dataSource, setDataSource] = useState<IPokemonRes>();
  const { searchName } = useSelector((state: any) => state?.searchName);

  const [getPokemons, { loading }] = useLazyQuery(queryAll, {
    variables: { first: 200 },
    onCompleted: (data) => {
      setDataSource(data);
    },
  });
  const [getPokemonByName, { loading: loadingSearchName }] = useLazyQuery(
    queryName,
    {
      variables: { name: searchName },
      onCompleted: (data) => {
        if (data?.pokemon) {
          const obj: IPokemonRes = {
            pokemons: [data?.pokemon],
          };

          setDataSource(obj);
        } else {
          setDataSource(undefined);
        }
      },
    }
  );

  const renderNotFound = () => {
    return (
      <div className="inline-center">
        <h1 style={{ padding: "10rem", color: "darkgrey" }}>Not Found</h1>
      </div>
    );
  };

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  useEffect(() => {
    if (searchName && searchName !== "ALL") {
      getPokemonByName();
    } else {
      getPokemons();
    }
  }, [searchName, getPokemonByName, getPokemons]);

  return (
    <div className="container">
      <Search />

      {!dataSource?.pokemons && searchName !== "ALL" && renderNotFound()}

      {loading || loadingSearchName ? (
        <Loading />
      ) : (
        <ul className="cards">
          {(dataSource?.pokemons?.length || 0) > 0 &&
            dataSource?.pokemons?.map((pokemon: any, i: number) => {
              return (
                <Card
                  img={pokemon?.image}
                  name={pokemon?.name}
                  number={pokemon?.number}
                  classification={pokemon?.classification}
                  attack={pokemon?.attacks?.fast}
                  specialAttack={pokemon?.attacks?.special}
                  key={i}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default Home;
