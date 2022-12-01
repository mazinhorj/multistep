import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs';

import './ReviewForm.css';

const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="review_form">
            <div className="form_control score_container">
                <label className="radio_container">
                    <input
                        type="radio"
                        value="unsatisfied"
                        name="review"
                        required
                        checked={data.review === "unsatisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill />
                    <p>Não gostei</p>
                </label>
                <label className="radio_container">
                    <input
                        type="radio"
                        value="neutral"
                        name="review"
                        required
                        checked={data.review === "neutral"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiNeutralFill />
                    <p>Mais ou menos</p>
                </label>
                <label className="radio_container">
                    <input
                        type="radio"
                        value="satisfied"
                        name="review"
                        required
                        checked={data.review === "satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiSmileFill />
                    <p>Gostei mesmo</p>
                </label>
                <label className="radio_container">
                    <input
                        type="radio"
                        value="very_satisfied"
                        name="review"
                        required
                        checked={data.review === "very_satisfied"}
                        onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill />
                    <p>Amei demais</p>
                </label>
            </div>
            <div className="form_control">
                <label htmlFor="comment">Sua opinião:</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Me diz o que você achou..."
                    required
                    value={data.comment}
                    onChange={(e) => updateFieldHandler("comment", e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default ReviewForm