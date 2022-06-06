import PropTypes from 'prop-types'
import classes from './Button.module.scss'

function Button(props) {
  const { title, buttonClass, onClick, buttonRef } = props
  return (
    <button
      type="button"
      className={`${classes.Button} ${buttonClass}`}
      onClick={onClick}
      ref={buttonRef}>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func,
  buttonRef: PropTypes.func,
}

Button.defaultProps = {
  title: 'Insert Title',
  buttonClass: '',
  onClick: () => {},
  buttonRef: () => {},
}

export default Button
