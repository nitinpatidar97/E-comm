import React from 'react';

const Loading = ({loadMsg}) => {
  return (
    <div className='loading'>
        <p>{loadMsg}</p>
    </div>
  )
}

export default Loading;