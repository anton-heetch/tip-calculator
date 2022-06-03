import PropTypes from 'prop-types'
import classes from './Button.module.scss'

function Button(props) {
  const { title, buttonClass, onClick } = props
  return (
    <button
      type="button"
      className={`${classes.Button} ${buttonClass}`}
      onClick={onClick}>
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  buttonClass: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  title: 'Insert Title',
  buttonClass: '',
  onClick: () => {},
}

export default Button
