"use client";

import styles from "@/app/page.module.css";
import { MdClose } from "react-icons/md";
import { BiChevronRight } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { useState } from "react";
const Menu = ({ menuOpen, setMenuOpen, setQuery, openMenu }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery({ q: city });
    setMenuOpen(false);
  };

  return (
    <div className={menuOpen ? styles.menuContainer : styles.menuDesactive}>
      <div className={menuOpen ? styles.closeContainer : styles.desactive}>
        <MdClose
          className={styles.closeIcon}
          onClick={() => setMenuOpen(false)}
        />
      </div>
      <form onSubmit={handleSubmit} style={{ width: "350px" }}>
        <div className={menuOpen ? styles.searchContainer : styles.desactive}>
          <IoIosSearch className={styles.searchIcon} />
          <input
            type="text"
            className={styles.search}
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            placeholder="search location"
          />
          <input type="submit" value="Search" className={styles.searchButton} />
        </div>
      </form>

      <div className={menuOpen ? styles.divCity : styles.desactive}>
        <div
          className={styles.selectCity}
          onClick={() => {
            setQuery({ q: "london" });
            openMenu(false);
          }}
        >
          <span className={styles.cityName}>London</span>
          <BiChevronRight className={styles.iconCity} />
        </div>
        <div
          className={styles.selectCity}
          onClick={() => {
            setQuery({ q: "barcelona" });
            openMenu(false);
          }}
        >
          <span className={styles.cityName}>Barcelona</span>
          <BiChevronRight className={styles.iconCity} />
        </div>
        <div
          className={styles.selectCity}
          onClick={() => {
            setQuery({ q: "long beach" });
            openMenu(false);
          }}
        >
          <span className={styles.cityName}>Long Beach</span>
          <BiChevronRight className={styles.iconCity} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
