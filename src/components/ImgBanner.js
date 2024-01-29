import React, { useState } from 'react';

const ImgBanner = ({ imageName, isClicked }) => {
  return (
    <div
      className={`flex justify-center items-center w-[178px] h-[231px] rounded-[20px] ${isClicked ? 'bg-[#FF8A00]' : 'bg-light-orange'}`}
    >
      <img src={imageName} alt="아코" />
    </div>
  );
};

export default ImgBanner;
