import React from "react";

function CandidateB ({voice, onVoice}) {

    return(
        <div>
            <p><strong>Кандидат B:</strong> {voice} голосов </p><button onClick={onVoice}>Проголосовать</button>
        </div>

    )
}

export default  CandidateB