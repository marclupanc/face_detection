import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div>
      <p className='text f3 center'>
        {'This Magic Brain will detect your face and your emotion!'}
      </p>
      <div className='center'>
        <div className='pa4 br3 shadow-5 center form'>
          {/*<input className='f4 pa2 w-70 input' type='tex' onChange={onInputChange}/>*/}
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;