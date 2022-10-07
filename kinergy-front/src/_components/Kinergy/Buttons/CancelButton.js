import React from 'react';
import './Button.scss';
export default function CancelButton(props) {
  const { text, action } = props;

  const noneEvent = () => {
    return false;
  };

  return (
    <>
      <button
        className='cancel-btn font-bold'
        onClick={action ? () => {action()} : noneEvent}
      >
        {text}
      </button>
    </>
  );
}
