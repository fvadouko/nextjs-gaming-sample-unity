import Link from "next/link";
import React from "react";

const Header = ({ children }) => {
  return (
    <>
      <div>
        <nav className="headerTop">
          <ul className="listeMenu">
            <li className="liensNav">
              <Link className="lien" href="/" passHref>
                <img src="IconeTwitch.svg" alt="logo twitch" className="logo" />
              </Link>
            </li>

            <li className="liensNav">
              <form className="formSubmit">
                <input required type="text" className="inputRecherche" />

                <Link className="lien" href="/" passHref>
                  <button type="submit">
                    <img
                      src="Search.svg"
                      alt="icone loupe"
                      className="logoLoupe"
                    />
                  </button>
                </Link>
              </form>
            </li>
            <li className="liensNav">
              <div style={{ display: "flex" }}>
                <Link href="/se-connecter" passHref>
                  <a className="lien" style={{ marginRight: 10 }}>
                    Se connecter
                  </a>
                </Link>
                <Link href="/voir-panier" passHref>
                  <a className="lien">Voir panier</a>
                </Link>
              </div>
            </li>
          </ul>
        </nav>

        <div className="menuResBtn">
          <img
            src="MenuIco.svg"
            alt="icone menu responsive"
            className="menuIco"
          />
        </div>
      </div>
      <div className="container">{children}</div>
    </>
  );
};

export default Header;
