import React from 'react';
import KineContext from '../../../_context/KineContext';
import Festivals from '../Festivals/Festivals';
import Rankings from '../Rankings/Rankings';

export default function CurrentOption() {
  const { currentSelectedOption } = React.useContext(KineContext);

  const renderCurrentOption = (option) => {
    if(option === 'Festivals') {
      return <Festivals />
    }
    if(option === 'Rankings') {
      return <Rankings />
    }
  }
  
  return(
    <>
    {
      renderCurrentOption(currentSelectedOption)
    }
    </>
  );
}
