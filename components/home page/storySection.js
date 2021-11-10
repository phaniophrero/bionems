import Image from "next/image";
import logo from "../../public/images/bionems-logo2.png";
import owner from "../../public/images/owner.png";
import cook from "../../public/images/cook.png";

function StorySection() {
  return (
    <section className="storySection">
      <header className="storySection__header">
        <div className="storySection__logo">
          <Image src={logo} width={408} height={116} />
        </div>
        <h2 className="storySection__title">
          <strong>L'Histoire</strong>
        </h2>
      </header>
      <div className="storySection__bio">
        <p className="storySection__description">
          Anne-Sophie a PIC(qué) le camion de son grand-père André sous l’œil
          malicieux de son père Jacques…
        </p>
        <p className="storySection__description">
          <span className="red__text">Son objectif :</span> mettre du swing, du
          twist et un brin de rock’n’roll dans vos assiettes !
        </p>
        <p className="storySection__description">
          <span className="red__text">Bravo</span> à nos producteurs locaux pour
          leur respect et leur amour des produits : La Ferme des Caillats
          (Royans-Vercors – Drôme), La viande D’ici (Drôme), Les Iles Ferays
          (Tournon sur Rhône – Ardèche), Jean-Luc Raillon
          (Saint-Vincent-la-Commanderie – Drôme).
        </p>
        <p className="storySection__description">
          <span className="green__text">Bravo</span> à nos producteurs locaux
          pour leur respect et leur amour des produits : La Ferme des Caillats
          (Royans-Vercors – Drôme), La viande D’ici (Drôme), Les Iles Ferays
          (Tournon sur Rhône – Ardèche), Jean-Luc Raillon
          (Saint-Vincent-la-Commanderie – Drôme).
        </p>
        <p className="storySection__description">
          <span className="green__text">Standing ovation</span> aux artistes
          Cartoon Dave & Miranda Richmond Mouillot qui ont croqué et peint le
          PicUp Truck avec passion et talent !
        </p>
      </div>
      <div className="storySection__imageLeft">
        <Image src={cook} width={313} height={321} />
      </div>
      <div className="storySection__imageRight">
        <Image src={owner} width={270} height={284} />
      </div>
    </section>
  );
}

export default StorySection;
