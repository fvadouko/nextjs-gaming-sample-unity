import React, { useEffect, useState } from "react";
import { firestore, fromMillis, postToJSON } from "../../lib/firebase";
import styles from "../../styles/Home.module.css";

const Welcome = ({ games }) => {
  const [gamesFormat, setGamesFormat] = useState([]);

  useEffect(() => {
    let finalArray = games.map((game) => {
      let newUrl = game.box_art_url
        .replace("{width}", "250")
        .replace("{height}", "300");
      game.box_art_url = newUrl;
      return game;
    });

    setGamesFormat(finalArray);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className="titreGames">Jouer à vos jeux maintenant !</h1>

        <div className="flexAccueil">
          {gamesFormat &&
            gamesFormat.length > 0 &&
            gamesFormat.map((game, index) => (
              <div key={index} className="carteGames">
                <img
                  src={game.box_art_url}
                  alt="jeu profile pic"
                  className="imgCarte"
                />

                <div className="cardBodyGames">
                  <h5 className="titreCartesGames">{game.name}</h5>

                  <button
                    type="button"
                    className="btnCarte"
                    onClick={() => gameToSee(game)}
                  >
                    Jouer
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Welcome;

export async function getServerSideProps({ query }) {
  const { uid } = query;
  const gamesQuery = firestore.collection("users").where("uid", "==", uid);
  const games = [];
  const docs = await gamesQuery.get(); //).docs.map(postToJSON);
  docs.forEach((doc) => {
    console.log("gamesQuery", doc.data());
    const gm = doc.data();
    for (let index = 0; index < gm.gamesArray.length; index++) {
      games.push(gm.gamesArray[index]);
    }
  });

  return {
    props: { games }, // will be passed to the page component as props
  };
}
