import React, { useState } from "react";

// Компонент Table - реализует функциональность динамической таблицы
function Table() {
    // Состояние для хранения строк таблицы
    // line: массив объектов, где каждый объект представляет строку таблицы с полями "name" и "description"
    const [line, setLine] = useState([]);

    // Состояние для хранения информации о том, какая ячейка редактируется
    // editing.row - индекс редактируемой строки
    // editing.field - поле, которое редактируется ("name" или "description")
    const [editing, setEditing] = useState({ row: null, field: null });

    /**
     * Функция handleAddRow - добавляет новую строку в таблицу
     * Используется метод spread operator `...` для добавления нового объекта в массив строк.
     * Новый объект содержит поля "name" и "description", которые изначально пусты.
     */
    const handleAddRow = () => {
        setLine([...line, { name: "", description: "" }]);
    };

    /**
     * Функция handleDeleteRow - удаляет строку из таблицы
     * @param {number} index - индекс строки, которую нужно удалить
     * Метод filter возвращает новый массив, исключая строку с переданным индексом.
     */
    const handleDeleteRow = (index) => {
        setLine(line.filter((_, i) => i !== index));
    };

    /**
     * Функция handleEdit - активирует режим редактирования
     * @param {number} rowIndex - индекс строки, которая редактируется
     * @param {string} field - поле, которое редактируется ("name" или "description")
     * Устанавливает состояние editing, чтобы указать текущую редактируемую строку и поле.
     */
    const handleEdit = (rowIndex, field) => {
        setEditing({ row: rowIndex, field });
    };

    /**
     * Функция handleValueChange - обновляет значение в таблице
     * @param {number} rowIndex - индекс строки, которую нужно обновить
     * @param {string} field - поле, которое нужно обновить ("name" или "description")
     * @param {string} value - новое значение для поля
     * Создаётся копия массива строк, обновляется указанное поле, и массив сохраняется в состоянии.
     */
    const handleValueChange = (rowIndex, field, value) => {
        const updatedLine = [...line]; // Копируем массив строк
        updatedLine[rowIndex][field] = value; // Изменяем значение поля в строке
        setLine(updatedLine); // Устанавливаем обновлённый массив в состояние
    };

    /**
     * Функция handleBlur - завершает режим редактирования
     * Очищает состояние editing, чтобы отключить режим редактирования.
     */
    const handleBlur = () => {
        setEditing({ row: null, field: null });
    };

    return (
        <div>
            {/* Таблица с заголовками */}
            <table>
                <thead>
                    <tr>
                        <th>Имя</th> {/* Заголовок столбца для поля "name" */}
                        <th>Описание</th> {/* Заголовок столбца для поля "description" */}
                        <th>Действия</th> {/* Заголовок столбца для кнопок действий */}
                    </tr>
                </thead>
                <tbody>
                    {/* Перебираем массив строк, чтобы отобразить их */}
                    {line.map((row, index) => (
                        <tr key={index}>
                            <td>
                                {/* Если текущая ячейка редактируется, отображаем поле ввода */}
                                {editing.row === index && editing.field === "name" ? (
                                    <input
                                        type="text"
                                        value={row.name} // Значение поля "name"
                                        onChange={(e) =>
                                            handleValueChange(index, "name", e.target.value)
                                        } // Обновляем значение при изменении текста
                                        onBlur={handleBlur} // Завершаем редактирование при потере фокуса
                                        autoFocus // Устанавливаем фокус на поле ввода
                                    />
                                ) : (
                                    // Если не редактируется, отображаем текст
                                    <span
                                        onClick={() => handleEdit(index, "name")} // Включаем режим редактирования при клике
                                    >
                                        {row.name || "Click to edit"} {/* Текст или приглашение для редактирования */}
                                    </span>
                                )}
                            </td>
                            <td>
                                {/* Если текущая ячейка редактируется, отображаем поле ввода */}
                                {editing.row === index && editing.field === "description" ? (
                                    <input
                                        type="text"
                                        value={row.description} // Значение поля "description"
                                        onChange={(e) =>
                                            handleValueChange(index, "description", e.target.value)
                                        } // Обновляем значение при изменении текста
                                        onBlur={handleBlur} // Завершаем редактирование при потере фокуса
                                        autoFocus // Устанавливаем фокус на поле ввода
                                    />
                                ) : (
                                    // Если не редактируется, отображаем текст
                                    <span
                                        onClick={() => handleEdit(index, "description")} // Включаем режим редактирования при клике
                                    >
                                        {row.description || "Click to edit"} {/* Текст или приглашение для редактирования */}
                                    </span>
                                )}
                            </td>
                            <td>
                                {/* Кнопка удаления строки */}
                                <button onClick={() => handleDeleteRow(index)}>
                                    Удалить
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Кнопка добавления строки */}
            <button onClick={handleAddRow}>Добавить строку</button>
        </div>
    );
}

export default Table;