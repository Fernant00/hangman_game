# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


##  Componente App.tsx: Pasar a otras listas
Primero creamos otras listas para tener mas opciones.
```js
const words3 = ['Table', 'Chair', 'Book', 'Pen', 'Computer', 'Lamp', 'Television'];

const words4 = ['Dog', 'Cat', 'Elephant', 'Lion', 'Giraffe', 'Dolphin', 'Eagle'];

function App(){
/* 
haciendo uso del usestate creamos un campo para convertir nuestro campos visibles o invisbles, y ocultar el que campo que no usemos */
    const [isVisible, setIsVisible] = useState(false); 
    const [isVisible2, setIsVisible2] = useState(false); 
    const [isVisible3, setIsVisible3] = useState(false); 

return(

<div className="uno">
    {
{/* imprimimos nuestro campo que contiene el juego del orcado y nuestra lista, solo que ahora tiene un campo que pregunta si es true se mostrara y si es false se oculta */}
        isVisible && <Hangman words={words} />
    }
</div>
<div className="olo">
    <button className ="custom-button" onClick={()=>{
{/* 
Al hacer click cambiamos el valor de ser false a true dependiendo que lista queremos */}
    setIsVisible(true),
    setIsVisible2(false),setIsVisible3(false)
    }

    }>food</button>
    
```

### componente Welcome.tsx: Modifica el componente para que dependiendo de la lista que se recibe muestre un “Hint” 
```js

  // Función para obtener una letra aleatoria al iniciar el juego
useEffect(() => {
    // Seleccionar una palabra aleatoria de la lista de palabras
    const randomWord = words[Math.floor(Math.random() * words.length)];
    // Establecer la palabra seleccionada
    setselectedWord(randomWord);
    // Seleccionar una letra aleatoria de la palabra y establecerla como adivinada al iniciar el juego
    const randomLetter = randomWord[Math.floor(Math.random() * randomWord.length)];
    setguessedLetters([randomLetter]);
}, [words]);

```
