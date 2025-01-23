import React from "react";

function CandidateA ({voice, onVoice}) {

    return(
        <div>
            <p><strong>Кандидат A:</strong> {voice} голосов </p> <button onClick={onVoice}>Проголосовать</button>
        </div>

    )
}

export default  CandidateA