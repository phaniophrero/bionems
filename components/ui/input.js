import React, { useState } from "react";
import Image from 'next/image'

const Input = (props) => {
  const { wrapperCN, type, label, placeholder, isTextarea, imageSRC } = props;
  const [show, setShow] = useState(false)
  const showHandler = () => setShow(prev => setShow(!prev))

  return !isTextarea ? (
    <div className={`input--ui ${wrapperCN && wrapperCN}`}>
      {label && <label htmlFor={label}>{label}</label>} 
      <input type={
        type === 'password' && !show
          ? 'password'
          : type === 'password' && show
          ? 'text'
          : type
      } placeholder={placeholder} />
      {imageSRC && (
        <div className="image-container">
          <div className="image">
            <Image src={imageSRC} alt='image' layout="fill" />
          </div>
        </div>
      )}

      {type == 'password' && (
        <p onClick={showHandler}>{show ? "hide" : "show"}</p>
      )}
    </div>
  ) : (
    <div className={`textarea-ui ${wrapperCN && wrapperCN}`}>
      <label htmlFor={label}>{label}</label>
      <textarea placeholder={placeholder} />
    </div>
  );
};

export default Input;
