import Image from "next/image";
import poster from "../../public/images/poster.png";
import owner from "../../public/images/owner2.png";

function TourSection() {
  return (
    <section className="tourSection">
      <header className="tourSection__header">
        <div className="tourSection__poster">
          <Image src={poster} width={1250} height={360} />
        </div>
        <div className="tourSection__owngerImage">
          <Image src={owner} width={254} height={270} />
        </div>

        <h2 className="tourSection__title">La tournee du Bionems Truck</h2>
        <p className="tourSection__description">
          Chaque jour une adresse différente pour retrouver la street food
          d’Anne-Sophie Bionems aux 4 coins de Paris et de la région !
        </p>
      </header>

      <div className="tourSection__program">
        <ul className="tourSection__programList">
          <li className="tourSection__programItem">
            <span className="programItem__date">Mardi 12 Octobre</span>{" "}
            <span className="programItem__city">Paris</span>{" "}
            <span className="programItem__hours">
              11h45 - 14h00{" "}
              <span className="programItem__place">Parking Despensee</span>
            </span>
          </li>
          <li className="tourSection__programItem">
            <span className="programItem__date">Mercredi 13 Octobre</span>{" "}
            <span className="programItem__city">Paris</span>{" "}
            <span className="programItem__hours">
              11h45 - 14h00{" "}
              <span className="programItem__place">Parking Despensee</span>
            </span>
          </li>
          <li className="tourSection__programItem">
            <span className="programItem__date">Jeudi 14 Octobre</span>{" "}
            <span className="programItem__city">Paris</span>{" "}
            <span className="programItem__hours">
              11h45 - 14h00{" "}
              <span className="programItem__place">Parking St. Michel</span>
            </span>
          </li>
          <li className="tourSection__programItem">
            <span className="programItem__date">Vendredi 15 Octobre</span>{" "}
            <span className="programItem__city">Paris</span>{" "}
            <span className="programItem__hours">
              11h45 - 14h00{" "}
              <span className="programItem__place">Parking Koesio</span>
            </span>
          </li>
          <li className="tourSection__programItem">
            <span className="programItem__date">Samedi 16 Octobre</span>{" "}
            <span className="programItem__city">Paris</span>{" "}
            <span className="programItem__hours">
              11h45 - 14h00{" "}
              <span className="programItem__place">Brasserie Pleine Lune</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default TourSection;
