import P from 'prop-types'

export const Button = ({ text, onButtonClick, disabledValue = false }) => {

    return (
        <button disabled={disabledValue} style={{ fontSize: '50px' }} onClick={onButtonClick}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: P.string.isRequired,
    onButtonClick: P.func.isRequired,
    disabled: P.bool,
}