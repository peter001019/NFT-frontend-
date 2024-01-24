import React, { useState } from 'react';

const ImgBanner = ({ imageName }) => {
  const [bgcolor, setBgcolor] = useState('bg-light-orange');
  const handleClick = () => {
    setBgcolor(currentColor =>
      currentColor === 'bg-light-orange' ? 'bg-[#FF8A00]' : 'bg-light-orange',
    );
  };

  return (
    <div
      className={`flex justify-center items-center w-[178px] h-[231px] rounded-[20px] ${bgcolor}`}
      onClick={handleClick}
    >
      <img src={imageName} alt="아코" />
    </div>
  );
};

export default ImgBanner;
