import React, { useContext } from "react";
import AuthCheck from "../components/AuthCheck/AuthCheck";
import { Context, UserContext } from "../lib/context";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const VoirPanier = () => {
  const {
    setGamesArray,
    state: { gamesArray },
  } = React.useContext(Context);

  const { user, username } = useContext(UserContext);
  const router = useRouter();

  return (
    <div className={styles.container}>
      <h1 className="titreGames">Votre panier</h1>
      <div className="flexAccueil">
        <div class="CartContainer">
          <div class="Header">
            <h3 class="Heading">Récapitulatif</h3>
            <h5 class="Action">Remove all</h5>
          </div>

          {gamesArray &&
            gamesArray.map((game, index) => (
              <div key={index} class="Cart-Items">
                <div class="image-box">
                  <img
                    src={game.box_art_url}
                    alt="jeu profile pic"
                    style={{ width: 60 }}
                  />
                </div>
                <div class="about">
                  <h1 class="title">{game.name}</h1>
                </div>
                <div class="counter">
                  <div class="btn">+</div>
                  <div class="count">1</div>
                  <div class="btn">-</div>
                </div>
                <div class="prices">
                  <div class="amount">€0</div>
                  <div class="save">
                    <u></u>
                  </div>
                  <div class="remove">
                    <u>Remove</u>
                  </div>
                </div>
              </div>
            ))}

          <hr />
          <div class="checkout">
            <div class="total">
              <div>
                <div class="Subtotal">Abonnements</div>
                <div class="items">{gamesArray.length} items</div>
              </div>
              <div class="total-amount">€20</div>
            </div>

            <button
              class="button"
              onClick={() => {
                if (!user) {
                  router.push(`/se-connecter`);
                } else {
                  router.push(`/paiement`);
                }
              }}
            >
              S'abonner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoirPanier;
