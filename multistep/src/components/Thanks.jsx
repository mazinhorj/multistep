import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
    BsEmojiNeutral,
} from 'react-icons/bs';

import './Thanks.css';

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsEmojiNeutral />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({data}) => {
    return (
        <div className="thanks_container">
            <h2>Tá acabando...</h2>
            <p>Sua opinião é muito importante!</p>
            <p>Clique no botão <strong> Enviar </strong> para concluir sua avaliação e ganhe um cupom de 10% de desconto na contratação de qualquer serviço, back ou front-end.</p>
            <h3>Resumo da sua avaliação, <span>{data.name}</span></h3>
            <p className="review_data">
                <span>Mood:</span>
                <span id="emoji">{emojiData[data.review]}</span>
                
            </p>
            <p className="review_data">
                <span>Escreveu: </span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks