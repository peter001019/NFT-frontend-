import React, { useEffect } from 'react';
import PageLayoutNavOrange from '../../components/PageLayoutNavOrange';
import ImgBanner from '../../components/ImgBanner';
import LongButtonOrange from '../../components/Button/LongButtonOrange';

export const Vote = () => {
  useEffect(() => {}, []);

  return (
    <PageLayoutNavOrange>
      <div className="flex flex-col items-center mt-[89px]">
        <p className="text-center w-[303px] text-black font-[NanumSquare\ Neo\ OTF] text-[26.606px] font-extrabold leading-normal whitespace-pre-wrap">
          당신의 뿌우에게{'\n'}
          <span className="text-black font-[PyeongChangPeace-Bold] text-[26.606px] font-bold leading-normal">
            투표
          </span>
          하세요!
        </p>
        <div className="mt-[17px] grid grid-cols-2 gap-[12px]">
          <ImgBanner imageName="아코/아코1.png" />
          <ImgBanner imageName="아코/아코2.png" />
          <ImgBanner imageName="아코/아코3.png" />
          <ImgBanner imageName="아코/아코4.png" />
        </div>
        <form>
          <LongButtonOrange type={'submit'} buttonName={'투표하기'} />
        </form>
      </div>
    </PageLayoutNavOrange>
  );
};
