import React from "react";
import { FaWhatsapp, FaTelegramPlane, FaEnvelope,  FaCopy, FaGithub } from "react-icons/fa";

function Contacts() {
    const handleEmailCopy = () => {
        const email = "moskalenkoderek@gmail.com"; // Текст email, который будет скопирован в буфер обмена
        navigator.clipboard.writeText(email).then(() => {
          alert("Email скопирован в буфер обмена!"); // Сообщение о том, что email скопирован
        }).catch((err) => {
          console.error("Не удалось скопировать email: ", err);
        });
      };
  return (
    <section id="contact">
        <h2>Контакты</h2>
      <ul>
        <li>
          <a href="https://wa.me/79214492141" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={20} color="#25D366" /> WhatsApp +7 921 449 21 41
          </a>
        </li>
        <li>
          <a href="https://t.me/ValeriyMoskalenko" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane color="#0088cc" size={20} /> Telegram: @ValeriyMoskalenko
          </a>
        </li>
        <li>
           <a href="javascript:void(0);" onClick={handleEmailCopy}> <FaEnvelope size={20} /> Email: moskalenkoderek@gmail.com<FaCopy /></a>
        </li>
        <li>
        <a href="https://github.com/Deadhar" target="_blank" rel="noopener noreferrer"><FaGithub size={20} className="github-icon"/>GitHub</a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;