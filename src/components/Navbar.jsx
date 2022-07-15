import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./NavBar.css";

import { useEffect, useState } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const gandleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> Movies LIB
        </Link>
      </h2>
      <form onSubmit={gandleSubmit}>
        <input
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
          type="text"
          placeholder="Busque um filme"
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};
