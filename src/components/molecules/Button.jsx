import PropTypes from 'prop-types'

function Button(props) {
  const { title } = props
  return <button type="button">{title}</button>
}

Button.propTypes = {
  title: PropTypes.string,
}

Button.defaultProps = {
  title: 'Insert Title',
}

export default Button
