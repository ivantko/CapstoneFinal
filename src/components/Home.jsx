import home_cyber from "../assets/Banner1.webp";
import cloud1 from "../assets/cloud1.webp";
import consulting from "../assets/consulting.webp";
import consulting1 from "../assets/consulting1.webp";
import forensics from "../assets/forensics.webp";
import pentest from "../assets/KNIGHT.webp";
import pentest2 from "../assets/pentest3.webp";
import assessment from "../assets/army.webp";


function Home() {
    return (
        <div>
            <img src={home_cyber} alt="Cyber Army" />
            <h3>Cybersecurity consulting services
            </h3>
            <ImageTape /> 
         </div>
    );
  }


  //using rolling image tape to showcase/hint services offered
  function ImageTape() {
    return (
      <div className="image-tape">
        <div className="image-container">
          <img src={cloud1} alt="Cloud"/>
          <img src={consulting} alt="consulting" />
          <img src={consulting1} alt="consulting1" />
          <img src={forensics} alt="forensics" />
          <img src={pentest} alt="pentest" />
          <img src={pentest2} alt="pentest2" />
          <img src={assessment} alt="assessment" />
        </div>
      </div>
    );
  }


  
  export default Home;
  export { ImageTape };
