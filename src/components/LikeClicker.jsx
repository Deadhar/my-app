import React, { useState } from 'react';

const LikeClicker = function () {
  const [likes, setLikes] = useState(0); // Состояние для лайков
  const [dislikes, setDislikes] = useState(0); // Состояние для дизлайков

  return (
    <div>
      {/* Кнопка для лайков */}
      <button className="btn" onClick={() => setLikes(likes + 1)}>
        Мне нравится 👍 {likes}
      </button>

      {/* Кнопка для дизлайков */}
      <button className="btn" onClick={() => setDislikes(dislikes + 1)}>
        Не нравится 👎 {dislikes}
      </button>
    </div>
  );
};

export default LikeClicker;