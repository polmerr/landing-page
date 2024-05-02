import "./App.css";
//card images
import cardImg1 from "./assets/sunnyside-agency-landing-page-main/images/desktop/image-transform.jpg";
import cardImg2 from "./assets/sunnyside-agency-landing-page-main/images/desktop/image-stand-out.jpg";
import cardImg3 from "./assets/sunnyside-agency-landing-page-main/images/mobile/image-graphic-design.jpg";
import cardImg3Desktop from "./assets/sunnyside-agency-landing-page-main/images/desktop/image-graphic-design.jpg";
import cardImg4 from "./assets/sunnyside-agency-landing-page-main/images/mobile/image-photography.jpg";
import cardImg4Desktop from "./assets/sunnyside-agency-landing-page-main/images/desktop/image-photography.jpg";
// avatar images
import avatar1 from "./assets/sunnyside-agency-landing-page-main/images/image-emily.jpg";
import avatar2 from "./assets/sunnyside-agency-landing-page-main/images/image-jennie.jpg";
import avatar3 from "./assets/sunnyside-agency-landing-page-main/images/image-thomas.jpg";
import ImageCard_Seperated from "./Components/ImageCard-Seperated/ImageCard-Seperated";
import NavBanner from "./Components/NavBanner/NavBanner";
import ImageCard_Combined from "./Components/ImageCard-Combined/ImageCard_Combined";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBanner />
      <div className="cards">
        <ImageCard_Seperated
          imageSrc={cardImg1}
          cardTitle={"Transform your brand"}
          cardDescription={
            "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
          }
          color={"yellow"}
          imgSide={"right"}
        />
        <ImageCard_Seperated
          imageSrc={cardImg2}
          cardTitle={"Stand out to the right audience"}
          cardDescription={
            "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
          }
          color={"red"}
        />
        <div className="comboCards">
          <ImageCard_Combined
            className="comboCard"
            imageSrc={[cardImg3, cardImg3Desktop]}
            title={"Graphic Design"}
            description={
              "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
            }
            color={"green"}
          />
          <ImageCard_Combined
            className="comboCard"
            imageSrc={[cardImg4, cardImg4Desktop]}
            title={"Photography"}
            color={"blue"}
            description={
              "Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            }
          />
        </div>
        <h2 className="testimonials-title">Client Testimonials</h2>
        <div className="testimonials">
          <Testimonial
            avatar={avatar1}
            description={
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            }
            Name={"Emily R"}
            position={"Marketing Director"}
          />
          <Testimonial
            avatar={avatar3}
            description={
              "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            }
            Name={"Thomas S"}
            position={"Chief Operating Officer"}
          />
          <Testimonial
            avatar={avatar2}
            description={
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended! "
            }
            Name={"Jennie F"}
            position={"Business Owner"}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
