import { setSearchName } from "@/store/pokemonSlice";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const goToHome = () => {
    dispatch(setSearchName("ALL"));
    router.push("/home");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <h1 className="logo pointer" onClick={() => goToHome()}>
          POKEMONS
        </h1>
      </div>
    </nav>
  );
};

export default Header;
