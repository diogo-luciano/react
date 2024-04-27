import propTypes from 'prop-types'

function Card({children, reverse = false}) {
    return <div className={`card ${reverse && "reverse"}`}>{children}</div>
}

Card.propTypes = {
    children: propTypes.node.isRequired,
    reverse: propTypes.bool
}

export default Card