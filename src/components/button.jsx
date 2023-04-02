import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
    const {title} = props

    return (
        <button>{title}</button>
    )
}

Button.propTypes = {

}

export default Button
