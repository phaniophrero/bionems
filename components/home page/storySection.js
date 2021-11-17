// import Image from "next/image";
// import logo from "../../public/images/bionems-logo2.png";
// import owner from "../../public/images/owner.png";
// import cook from "../../public/images/cook.png";
import React from "react";
import Image from "next/image";

function StorySection() {
  return (
    <div className="story-section">
      {/* //? LEFT */}
      <div className="story-left">
        <div className="left-image-container">
          <div className="left-image">
            <Image
              src="/assets/home-page/story-section/cook.png"
              alt="image"
              layout="fill"
            />
          </div>
        </div>
      </div>

      {/* //? MAIN */}
      <div className="story-main">
        <div className="logo">
          <Image
            src="/assets/home-page/story-section/logo.png"
            alt="logo"
            layout="fill"
          />
        </div>

        <div className="title">
          <h1>L'HISTOIRE</h1>
        </div>

        <div className="description">
          <p>
            Anne-Sophie a PIC(qué) le camion de son grand-père André sous l’œil
            malicieux de son père Jacques…
          </p>
          <p>
            <span className="red">Son objectif</span> : mettre du swing, du twist et un brin de rock’n’roll
            dans vos assiettes !
          </p>
          <p>
            <span className="red">Bravo</span> à nos producteurs locaux pour leur respect et leur amour des
            produits : La Ferme des Caillats (Royans-Vercors – Drôme), La viande
            D’ici (Drôme), Les Iles Ferays (Tournon sur Rhône – Ardèche),
            Jean-Luc Raillon (Saint-Vincent-la-Commanderie – Drôme), …
          </p>
          <p>
            <span className="green">Bravo</span> à nos producteurs locaux pour leur respect et leur amour des
            produits : La Ferme des Caillats (Royans-Vercors – Drôme), La viande
            D’ici (Drôme), Les Iles Ferays (Tournon sur Rhône – Ardèche),
            Jean-Luc Raillon (Saint-Vincent-la-Commanderie – Drôme), …
          </p>
          <p>
            <span className="green">Standing ovation</span> aux artistes Cartoon Dave {'&'} Miranda Richmond
            Mouillot qui ont croqué et peint le PicUp Truck avec passion et
            talent !
          </p>
        </div>
      </div>

      {/* //? RIGHT */}
      <div className="story-right">
        <div className="right-image-container">
          <div className="right-image">
            <Image
              src="/assets/home-page/story-section/story-profile@3x.png"
              alt="image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StorySection;
