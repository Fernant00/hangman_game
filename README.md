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
```js
const words3 = ['Table', 'Chair', 'Book', 'Pen', 'Computer', 'Lamp', 'Television'];

const words4 = ['Dog', 'Cat', 'Elephant', 'Lion', 'Giraffe', 'Dolphin', 'Eagle'];
function App(){
    const [isVisible, setIsVisible] = useState(false); 
    const [isVisible2, setIsVisible2] = useState(false); 
    const [isVisible3, setIsVisible3] = useState(false); 
return(
    
<div className='App' >
<Welcome/>

<div className="uno">
    {
        isVisible && <Hangman words={words} />
    }
</div>
<div className="dos">
    {
        isVisible2 && <Hangman words={words3} />
    }
</div>
<div className="tres">
    {
        isVisible3 && <Hangman words={words4} />
    }
</div>
<div className="olo">
    <button className ="custom-button" onClick={()=>{
    setIsVisible(true),
    setIsVisible2(false),setIsVisible3(false)
    }

    }>food</button>
    
```