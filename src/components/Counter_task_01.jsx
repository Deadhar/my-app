import React, { useState } from "react";


// Задача 1: Счётчик с динамическим шагом
// Создай компонент, который:

// Показывает текущее значение счётчика.
// Имеет два поля ввода:
// Одно для ввода шага, на который увеличивается/уменьшается счётчик.
// Другое для установки начального значения счётчика.
// Две кнопки: "Увеличить" и "Уменьшить".

const Counter = () => {
    const [meaning, setMeaning] = useState(0); // Начальное значение
    const [step, setStep] = useState(1); // Размер шага

    const handleIncrement = () => {
        const stepValue = parseInt(step);
        const meaningValue = parseInt(meaning);

        if (!isNaN(stepValue) && !isNaN(meaningValue)) {
            setMeaning(meaningValue + stepValue);
        }
    };

    const handleDecrement = () => {
        const stepValue = parseInt(step);
        const meaningValue = parseInt(meaning);

        if (!isNaN(stepValue) && !isNaN(meaningValue)) {
            setMeaning(meaningValue - stepValue);
        }
    };

    const handleStepChange = (ev) => {
        const value = ev.target.value.trim();
        setStep(value === '' ? '' : parseInt(value)); // Если поле пустое, шаг = 1
    };

    const handleMeaningChange = (ev) => {
        const value = ev.target.value.trim();
        setMeaning(value === '' ? 0 : parseInt(value)); // Если поле пустое, значение = 0
    };

    return (
        <div>
            <button onClick={handleIncrement}>Увеличить +</button>
            <button onClick={handleDecrement}>Уменьшить -</button>
            <input
                type="text"
                onChange={handleStepChange}
                placeholder="Введите размер шага"
                value={step}
            />
            <input
                type="text"
                onChange={handleMeaningChange}
                placeholder="Введите начальное значение"
                value={meaning}
            />
        </div>
    );
};

export default Counter;