import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button className='bg-transparent text-white py-2 px-6 rounded-full border-2 border-primary-100 hover:bg-primary-100 font-bold hover:text-primary-700 duration-500'>
      {props.children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button