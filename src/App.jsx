import React from "react";
import Header from "./components/My portfolio/Header";
import About from "./components/My portfolio/About";
import Skills from "./components/My portfolio/Skills";
import Projects from "./components/My portfolio/Projects";
import Contacts from "./components/My portfolio/Contact";
import './App.css'; // Подключение нового CSS файла
import { ImHeart } from "react-icons/im";
function App() {
  return (
    <div>
      {/* Шапка */}
      <Header />
      {/* Основной контент */}
      <main>
          <About />
          <Projects />
          <Skills />
          <Contacts />
      </main>

      {/* Футер */}
      <footer>
        © {new Date().getFullYear()} Мое портфолио. Сделано с <ImHeart size = {20} color="F1502F"/>.
      </footer>
    </div>
  );
}

export default App;
  
  












































// let jsx =<mark>Строка</mark>
// const exp1 = <div className='some'>2+3={2+3}</div>

// const date = new Date();
// const odd = <div>нечетный</div>
// const even = <div>четный</div>
// const result = date.getHours % 2 ? odd : even;

// const imageUrl = `https://placekitten.com/100/100`;
// const image =<img src={imageUrl} />;

// function App() {

//   const buttons = [
//     {value: 'Кнопка1', fn: ()=> console.log(1)},
//     {value: 'Кнопка2', fn: ()=> console.log(2)},
//     {value: 'Кнопка3', fn: ()=> console.log(3)},
//     {value: 'Кнопка4', fn: ()=> console.log(4)},];

// return (
// <div className="App">
// <header className="App-header">
// {/* <h1>Привет, мир!!!</h1> */}
// <div>
// <Button value={'Моя кнопка'} onClickHandler={()=> alert('Ура')}/>
//   </div>

//   <div>
// <Button value={'Кнопка'} onClickHandler={()=> alert('УРААААааааа')}/>
//   </div>
  
//   <hr/>
  
//   {buttons.map(button =>{
//     return (

// <Button value={button.value} onClickHandler ={button.fn}/>

//     )
//   } )}

// </header>
// </div>
// );
// }
// export default App;