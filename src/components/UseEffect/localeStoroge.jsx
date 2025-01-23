import { useState, useEffect } from "react";

function AddForm() {
    // Инициализация состояний для имени и почты
    const [nameText, setNameText] = useState('');
    const [mail, setMail] = useState('');
    
    // Инициализация состояния с данными из localStorage
    const [form, setForm] = useState(() => {
        // Попытка получить данные из localStorage, если их нет, возвращаем пустой массив
        const savedForm = localStorage.getItem('form');
        return savedForm ? JSON.parse(savedForm) : [];  // Преобразуем строку обратно в массив
    });

    // useEffect для обновления localStorage при изменении form
    useEffect(() => {
        if (form.length > 0) {
            localStorage.setItem('form', JSON.stringify(form));  // Сохраняем массив в localStorage
        }
    }, [form]);  // Этот эффект срабатывает каждый раз при изменении form

    // Обработчик для сохранения данных
    const handler = () => {
        if (nameText && mail) {  // Проверка, что имя и почта не пустые
            const newUser = {
                id: Date.now(),
                name: nameText,
                email: mail
            };
            setForm((prevForm) => [...prevForm, newUser]);  // Добавляем нового пользователя в массив
            setNameText('');  // Очищаем поле имени
            setMail('');  // Очищаем поле почты
        }
    };

    return (
        <div>
            {form.map((item) => (
                <p key={item.id}>
                    <strong>Hello: {item.name}, email: {item.email}</strong>
                </p>
            ))}
            <input
                value={nameText}
                type="text"
                placeholder="Enter your name"
                onChange={(ev) => setNameText(ev.target.value)}
            />
            <input
                value={mail}
                type="text"
                placeholder="Enter your email"
                onChange={(ev) => setMail(ev.target.value)}
            />
            <button onClick={handler}>Save</button>
        </div>
    );
}

export default AddForm;