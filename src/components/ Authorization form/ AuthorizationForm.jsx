import React, { useState } from "react";

// Компонент формы с валидацией
function AuthorizationForm() {
  // Состояния для значений полей
  const [name, setName] = useState(''); // Имя пользователя
  const [mail, setMail] = useState(''); // Email пользователя
  const [password, setPassword] = useState(''); // Пароль пользователя

  // Состояния для ошибок
  const [errorName, setErrorName] = useState(''); // Ошибка для имени
  const [errorEmail, setErrorEmail] = useState(''); // Ошибка для email
  const [errorPassword, setErrorPassword] = useState(''); // Ошибка для пароля

  // Функция для валидации формы
  const validateForm = () => {
    let valid = true;

    // Проверка имени: оно не должно быть пустым
    if (name.trim() === '') {
      setErrorName('Имя не может быть пустым');
      valid = false;
    } else {
      setErrorName('');
    }

    // Проверка email: он должен соответствовать формату
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(mail)) {
      setErrorEmail('Введите правильный email');
      valid = false;
    } else {
      setErrorEmail('');
    }

    // Проверка пароля: он должен содержать не менее 6 символов
    if (password.length < 6) {
      setErrorPassword('Пароль должен содержать не менее 6 символов');
      valid = false;
    } else {
      setErrorPassword('');
    }

    return valid; // Возвращает true, если все проверки пройдены
  };

  // Функция для обработки отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке

    // Если форма валидна, показываем данные и очищаем поля
    if (validateForm()) {
      console.log('Форма успешно отправлена:', { name, mail, password });
      setName('');
      setMail('');
      setPassword('');
    } else {
      console.log('Форма содержит ошибки');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Поле для имени */}
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Введите имя"
        />
        {/* Сообщение об ошибке для имени */}
        {errorName && <div style={{ color: 'red' }}>{errorName}</div>}
      </div>

      {/* Поле для email */}
      <div>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Введите email"
        />
        {/* Сообщение об ошибке для email */}
        {errorEmail && <div style={{ color: 'red' }}>{errorEmail}</div>}
      </div>

      {/* Поле для пароля */}
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
        {/* Сообщение об ошибке для пароля */}
        {errorPassword && <div style={{ color: 'red' }}>{errorPassword}</div>}
      </div>

      {/* Кнопка отправки */}
      <button type="submit" disabled={errorName || errorEmail || errorPassword}>
        Отправить
      </button>
    </form>
  );
}

export default AuthorizationForm;