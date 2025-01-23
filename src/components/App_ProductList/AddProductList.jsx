import React from "react";

function AddProductList({ add, valueText, chenge}) {
    return (
        <div>
            <h1>Список продуктов</h1>
            <input placeholder="Наименование продукта" value={valueText} onChange={chenge}></input>
            <button onClick={add}>Добавить продукт</button>
        </div>
    )
}

export default AddProductList