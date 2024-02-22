import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {


  return (
    <button className={`${props.customBgColor} ${props.customTextColor} ${props.customPaddingY} ${props.customPaddingX} ${props.customRounded} ${props.customBorder} ${props.customBorderColor} ${props.customHoverBgColor} font-bold ${props.customHoverTextColor} duration-500`}>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  customHoverBgColor: PropTypes.string.isRequired,
  customTextColor: PropTypes.string.isRequired,
  customBorderColor: PropTypes.string.isRequired,
  customHoverTextColor: PropTypes.string.isRequired,
  customPaddingX: PropTypes.string.isRequired,
  customBgColor: PropTypes.string.isRequired,
  customPaddingY: PropTypes.string.isRequired,
  customRounded: PropTypes.string.isRequired,
  customBorder: PropTypes.string.isRequired

};

Button.defaultProps = {
  customHoverBgColor: 'hover:bg-primary-100',
  customTextColor: 'text-primary-100',
  customBorderColor: 'border-praimry-100',
  customHoverTextColor: 'hover:text-primary-700',
  customPaddingX: 'px-6',
  customPaddingY: 'py-3',
  customBgColor: 'bg-transparent',
  customRounded: 'rounded-full',
  customBorder: 'border-2'
};

export default Button