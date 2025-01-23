import { useState } from "react";

function TableTask() {
    // Стейт для хранения имени задачи
    const [taskName, setTaskName] = useState("");

    // Стейт для хранения описания задачи
    const [taskDescription, setTaskDescription] = useState("");

    // Стейт для хранения списка задач
    const [tasks, setTasks] = useState([]);

    // Функция для добавления новой заявки
    const addTask = () => {
        // Проверяем, чтобы поля не были пустыми
        if (taskName.trim() && taskDescription.trim()) {
            // Создаем новую задачу
            const newTask = {
                name: taskName,
                description: taskDescription,
                status: "Открыто", // Устанавливаем статус по умолчанию
            };

            // Добавляем новую задачу в список задач
            setTasks([...tasks, newTask]);

            // Очищаем поля ввода
            setTaskName("");
            setTaskDescription("");
        }
    };

    // Функция для удаления задачи по индексу
    const deleteTask = (index) => {
        // Фильтруем массив, исключая задачу с указанным индексом
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Функция для изменения статуса задачи
    const changeStatus = (index, newStatus) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div>
            {/* Поля ввода для имени и описания задачи */}
            <input
                type="text"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                placeholder="Введите имя задачи"
            />
            <input
                type="text"
                onChange={(e) => setTaskDescription(e.target.value)}
                value={taskDescription}
                placeholder="Введите описание задачи"
            />
            <button onClick={addTask}>Добавить заявку</button>

            {/* Таблица заявок */}
            <table border="1">
                <thead>
                    <tr>
                        <th>Имя задачи</th>
                        <th>Описание</th>
                        <th>Статус</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={index}>
                            <td>{task.name}</td>
                            <td>{task.description}</td>
                            <td>
                                <select
                                    value={task.status}
                                    onChange={(e) =>
                                        changeStatus(index, e.target.value)
                                    }
                                >
                                    <option>Открыто</option>
                                    <option>В процессе обработки...</option>
                                    <option>Срочно</option>
                                    <option>Стандартно</option>
                                </select>
                            </td>
                            <td>
                                <button onClick={() => deleteTask(index)}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableTask;