import React, { useState } from "react";

function AddTask() {
    const [textValue, setTextValue] = useState(''); // Текст новой задачи
    const [Arraytext, setArrayText] = useState([]); // Список задач

    const addTask = () => {
        if (textValue.trim()) {
            const newTask = {
                id: Date.now(), // Генерация уникального id
                name: textValue // Текст задачи
            };
            setArrayText([...Arraytext, newTask]); // Добавляем задачу в массив
            setTextValue(''); // Сбрасываем поле ввода
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Предотвращаем стандартное поведение Enter
            addTask();
        }
    };

    // Функция для удаления задачи
    const deleteTask = (id) => {
        const updatedTasks = Arraytext.filter((task) => task.id !== id); // Убираем задачу с указанным id
        setArrayText(updatedTasks);
    };

    return (
        <div>
            <input
                onKeyDown={handleKeyDown}
                onChange={(ev) => setTextValue(ev.target.value)}
                value={textValue}
                type="text"
                placeholder="Введите задачу..."
            />
            <button onClick={addTask}>Добавить задачу</button>
            <h2>In progress ...</h2>
            <ul>
                {Arraytext.map((task) => (
                    <li key={task.id}>
                        {task.name}
                        <div>
                            <button onClick={() => deleteTask(task.id)}>Delete</button> {/* Передаем id задачи */}
                            <button>Done</button>
                            <button>Edit</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AddTask;
