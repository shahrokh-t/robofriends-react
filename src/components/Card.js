import React from 'react';

const Card = ({name, email,id}) => {
    // const {name, email, id} = props;
  return (
    <div className='bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5 tc'>
        <img src={`https://robohash.org/${id}.png?size=285x285`} alt='text' />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>

    </div>
  );
}

export default Card;    