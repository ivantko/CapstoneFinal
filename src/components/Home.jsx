import home_cyber from "../assets/bulwarkhome.png";

function Home() {
    return (
        <div>
            <h1>Welcome to Binary Bulwark</h1>
            <img src={home_cyber} />
            <p> Defending against hackers is difficult. They only need to exploit 1 vulnerability,
                while you have to defend against all.  
            </p>
            <p>With specialized services tailored to business needs, 
               Binary Bulwark solves your information security problems.
            </p>
         </div>
    );
  }

  
  export default Home;
  