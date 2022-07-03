import React from 'react';

function Modal({currentPhoto}) {
  const {name, category, description, index} = currentPhoto;

  return (
    <div className="modalBackDrop">
      <h3 className='modalTitle'>{name}</h3>
      <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt={category} />
      <p>{description}</p>
      <button type="button">
        Close this modal
      </button>
    </div>
  );
}

export default Modal;
