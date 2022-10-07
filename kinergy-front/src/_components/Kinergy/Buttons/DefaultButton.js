import React from 'react';
import './Button.scss';
export default function DefaultButton(props) {
  const { text, action } = props;

  const noneEvent = () => {
    return false;
  };

  return (
    <>
      <button
        className='primary-btn font-bold'
        onClick={action ? () => {action()} : noneEvent}
      >
        {text}
      </button>
    </>
  );
}
