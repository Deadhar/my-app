import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import AddTask from "./components/Task tracker/AddTask";
import Tasks from "./components/UseEffect/taskUseEffect";
import Counter from "./components/UseEffect/useEffect2";
import AddName from "./components/UseEffect/localeStoroge";
// import ButtonCounter from "./components/01 - counter"
// import Basket from "./components/Basket.jsx";
// import CatalogPage from "./components/CatalogPage.jsx";
// import Clicker from "./components/Clicker";
// import LikeClicker from "./components/LikeClicker";


function App() {


// const [startItems, setStartItems]= React.useState([]);
// const [error, setEror] = React.useState(null);
// const [isLoaded, setIsloaded] = React.useState(false);

// useEffect(()=>{
//     fetch('http://localhost:5173/items.json')
//     .then (res=>res.json())
//     .then (
//     (result) =>{
//         setIsloaded (true);
//         setStartItems(result);
//     },
//     (error)=>{
//         setIsloaded (true);
//         setEror(error);
//     }
//     )
// },[])

// let basketPlace = null;
// if (error) {
// basketPlace = <div>Ошибка: {error.message}</div>;
// } else if (!isLoaded) {
// basketPlace = <div>Загрузка...</div>;
// } else {
// basketPlace = <Basket items={startItems} />
// }
return (
<div className="App">
<header className="App-header">
    <h1>Список задач</h1>
    <AddTask/>
    <div>
    <h2>Выполнено</h2>
    </div>
    {/* <h1>Каталог</h1>
    <CatalogPage/>2
<h1>Корзина</h1>
{basketPlace} */}
{/* <ButtonCounter/> */}
</header>
</div>
);
// const items = [
// {
// uid: "86ed58db-082d-45ab-aa81-5218059349cb",
// title: "Товар1",
// description: "описание товара 1",
// price: 1200,
// qty: 1
// },
// {
// uid: "05542e59-7a90-4e80-bf9d-78967f272049",
// title: "Товар2",
// description: "описание товара 2",
// price: 800,
// qty: 1
// },
// {
// uid: "7793e4f0-fe86-47cc-98f6-e01b6beeb3af",
// title: "Товар3",
// description: "описание товара 3",
// price: 250,
// qty: 2 
// },
// ];
// return (
// <div className="App">
// <header className="App-header">
// <h1>Корзина</h1>
// {/* <Clicker value={2}/> */}
// <Basket items={items} />
// {/* <LikeClicker>Лайки</LikeClicker> */}
// </header>
// </div>
// );
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