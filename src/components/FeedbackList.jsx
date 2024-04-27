import propTypes from "prop-types"
import FeedbackItem from "./FeedbackItem"

function FeedbackList({feedback, handleDelete}) {
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }

    return (
        <div className="feedback-list">
            {feedback.map((item) =>
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            )}
        </div>
    )
}

FeedbackList.propTypes = {
    feedback: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.number.isRequired,
            text: propTypes.string.isRequired,
            rating: propTypes.number.isRequired
        })
    )
}

export default FeedbackList