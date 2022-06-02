import PropTypes from 'prop-types'

function Input(props) {
  const {
    type,
    className,
    value,
    placeholder,
    onChange,
    onClick,
    onFocus,
    onWheel,
  } = props

  return (
    <>
      <input
        type={type}
        className={className}
        defaultValue={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onFocus={onFocus}
        onWheel={onWheel}
      />
    </>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onWheel: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  className: '',
  value: 0,
  placeholder: '',
  onChange: () => {},
  onClick: () => {},
  onFocus: () => {},
  onWheel: () => {},
}

export default Input
