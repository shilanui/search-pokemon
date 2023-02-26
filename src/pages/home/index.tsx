import Card from "@/components/Card";
import Loading from "@/components/Loading";
import { queryAll } from "@/query/pokemon";
import { useLazyQuery } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
// import TableData from "../../components/TableData";
// import Pagination from "../../components/Pagination";
// import Loading from "../../components/Loading";
import Search from "../../components/Search";

const Home = () => {
  console.log("Home page test");

  const [getPokemons, { loading, error, data }] = useLazyQuery(queryAll, {
    variables: { first: 30 },
  });

  useEffect(() => {
    getPokemons();
  }, []);

  console.log("data =", data);

  // const { dataContext, dataContextAction } = useDataContext();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalCount, setTotalCount] = useState(0);
  // const [dataSource, setDataSource] = useState([]);

  // const getRepos = useCallback(async (text = "react", page = 1) => {
  //   dataContextAction.setLoading(true);
  //   const res = await getListRepos(text, page);
  //   setTotalCount(res?.total_count / 10);
  //   const obj = res?.items?.map((data) => {
  //     return {
  //       id: data?.id,
  //       name: data?.name,
  //       username: data?.owner?.login,
  //       url: data?.url,
  //       created_at: moment(data?.created_at).format("DD/MM/YYYY"),
  //     };
  //   });
  //   setDataSource(obj);
  //   dataContextAction.setLoading(false);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const handleChangePage = useCallback(
  //   async (page) => {
  //     getRepos(dataContext?.searchData, page);
  //     setCurrentPage(page);
  //   },
  //   [dataContext?.searchData, getRepos]
  // );

  // useEffect(() => {
  //   getRepos();
  // }, [getRepos]);

  // useEffect(() => {
  //   if (dataContext?.searchData) {
  //     getRepos(dataContext?.searchData, 1);
  //     setCurrentPage(1);
  //   }
  // }, [dataContext?.searchData, getRepos]);

  if (loading) {
    <Loading />;
  }

  return (
    <div className="container">
      <Search />

      <ul className="cards">
        {data?.pokemons.length > 0 &&
          data?.pokemons?.map((pokemon: any, i: number) => {
            return (
              <Card
                img={pokemon.image}
                name={pokemon.name}
                number={pokemon.number}
                classification={pokemon.classification}
                key={i}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
