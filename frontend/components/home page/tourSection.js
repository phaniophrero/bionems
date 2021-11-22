import Image from "next/image";
import poster from "../../public/images/poster.png";
import owner from "../../public/images/owner2.png";

function TourSection(props) {
  const { tourData } = props;

  return (
    <section name="bionems truck" className="tour-section">
      {tourData.map((tour, index) => (
        <div className="tour-wrapper" key={index}>
          <div className="orar">
            <div className="title">
              <h1>{tour.title}</h1>
            </div>

            <div className="subtitle">
              <h1>{tour.subTitle}</h1>
            </div>

            <ul className="program">
              {tour.program.map((item, index) => (
                <li key={index}>
                  <h1>{item.date}</h1>
                  <h2>{item.city}</h2>

                  <div className="location">
                    <h4>{item.orar}</h4>
                    <p>{item.location}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}

export default TourSection;
