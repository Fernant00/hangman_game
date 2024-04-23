import { useEffect, useState } from "react";

interface HangmanProps {
    words: string[];
}

const Hangman = ({words}: HangmanProps)=>{
    const [selectedWord,setselectedWord] = useState(words[0]);
    const [guessedLetters,setguessedLetters] = useState<string[]>([]);
    const [errorCount,seterrorCount] = useState(0);

    const displayWord = selectedWord.split('').map((letter,index) =>{
        console.log("selectedWord: ", selectedWord)
        if(guessedLetters.includes(letter)){
            console.log("guessedLetters: ", guessedLetters)
            return letter;
        } else{
            return '_';
        }

    });
  // Función para obtener una letra aleatoria al iniciar el juego
  useEffect(() => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setselectedWord(randomWord);
    const randomLetter = randomWord[Math.floor(Math.random() * randomWord.length)];
    setguessedLetters([randomLetter]);
}, [words]);
    
const handleGuess = (letter: string) =>{
    if(!guessedLetters.includes(letter)){
        setguessedLetters([...guessedLetters,letter]);
        if(!selectedWord.includes(letter)){
            seterrorCount((prev) =>prev + 1);
            console.log("setErrorCount: ",seterrorCount)
        }

    }
};
const restartGame = () => {
    const newWordIndex = Math.floor(Math.random() * words.length);
    const newWord = words[newWordIndex];
    setselectedWord(newWord);
    setguessedLetters([]);//reiniciar las letras adivinadas
    seterrorCount(0);
};
return(
<div>
<p>{displayWord.join(' ')}</p>
<input maxLength={1} onChange={(e) => handleGuess(e.target.value)} />
{(displayWord.join('') === selectedWord || errorCount > 5)&& (
    <button onClick={() => {
        restartGame();
        setselectedWord(words[Math.floor(Math.random() * words.length)]);

    }}>selected new Word</button>
)}
<p>cantidad de errores{errorCount}</p>
{displayWord.join('')=== selectedWord && (
    <p>You won in this round</p>
)}
</div>

);
};
export default Hangman;