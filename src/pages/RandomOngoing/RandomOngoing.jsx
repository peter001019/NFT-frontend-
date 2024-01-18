import React from 'react';
import { useNavigate } from 'react-router';

export const RandomOngoing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <nav>
        <img className="w-full h-[180px]" src="Bgtop.png" alt="위 배경" />
      </nav>

      <div className="flex-1">
        {/* Bg3.png 이미지 */}
        <div className="bg-white flex flex-col items-center justify-center">
          <img
            className="ml-10 w-[448px] h-[325px]  object-cover"
            alt="Image"
            src="box.png"
          />
          <button
            className="m-5 w-[318px] h-[42px] bg-[#ff8900] font-bold text-white text-[17px] text-center tracking-[-0.30px] leading-[normal] p-[10px] rounded-[30px]"
            onClick={() => navigate('/issueComplete')}
          >
            열기
          </button>
        </div>
      </div>

      <footer className="text-white">
        <img className="w-full h-[180px]" src="Bgbottom.png" alt="아래 배경" />
      </footer>
    </div>
  );
};
