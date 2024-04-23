import hangman from "../img/hangman.png";
import "../css/main.css";
export default function Welcome(){
    return(
        <>
        <div className="wrapper">
            <h1>Welcome to Hangman</h1>
            
            <img src={hangman} alt="hangman image.." width={200} height={200} /> {/* si usas comillas dobles aqui, tambiem arriba */}
        </div>
        </>
    );
}