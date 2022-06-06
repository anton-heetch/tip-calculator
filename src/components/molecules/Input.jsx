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
    inputRef,
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
        ref={inputRef}
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
  inputRef: PropTypes.func,
}

Input.defaultProps = {
  type: 'text',
  className: '',
  value: undefined,
  placeholder: '',
  onChange: () => {},
  onClick: () => {},
  onFocus: () => {},
  onWheel: () => {},
  inputRef: () => {},
}

export default Input
