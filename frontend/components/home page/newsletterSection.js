import Image from "next/image";
import paperPlane from "../../public/images/paper-plane.svg";
import paperPlaneRight from "../../public/images/paper-plane-right.svg";
import Button from "../ui/button";

function NewsletterSection() {
  return (
    <section className="newsletterSection">
      <header className="newsletterSection__header">
        <div className="newsletterSection__titleWrapper">
          <div className="newsletterSection__headerIcon headerIcon__left">
            <Image src={paperPlane} width={50} height={50} />
          </div>
          <h2 className="newsletterSection__title">Actualites Bionems</h2>
          <div className="newsletterSection__headerIcon headerIcon__right">
            <Image src={paperPlaneRight} width={50} height={50} />
          </div>
        </div>
        <p className="newsletterSection__description">
          Inscrivez-vous à notre newsletter et recevez toutes les dernières
          actualités du groupe Bionems
        </p>
      </header>

      <form action="" className="newsletterSection__form">
        <div className="newsletterSection_formRow">
          <input
            type="email"
            placeholder="example@email.fr"
            className="newsletterSection_formInput"
          />
          <Button type="submit" className="newsletterSection_formButton">
            S'inscrire
          </Button>
        </div>
      </form>
    </section>
  );
}
export default NewsletterSection;
