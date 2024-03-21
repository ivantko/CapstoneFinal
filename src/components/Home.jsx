import home_cyber from "../assets/Banner1.webp";

function Home() {
    return (
        <div>
            <img src={home_cyber} alt="Cyber Army" />
            <h3>Cybersecurity consulting services
            </h3>
            <ImageTape /> {/* Add this line to include the ImageTape component */}
         </div>
    );
  }

  function ImageTape() {
    return (
      <div className="image-tape">
        <div className="image-container">
          <img src="/src/assets/cloud1.webp" alt="cloud sec" />
          <img src="/src/assets/consulting.webp" alt="consulting" />
          <img src="/src/assets/consulting1.webp" alt="consulting1" />
          <img src="/src/assets/forensics.webp" alt="forensics" />
          <img src="/src/assets/KNIGHT.webp" alt="pentest" />
          <img src="/src/assets/pentest3.webp" alt="pentest2" />
          <img src="/src/assets/army.webp" alt="assessment" />
          {/* Add more images as needed */}
        </div>
      </div>
    );
  }


  
  export default Home;
  export { ImageTape };
