import React from 'react';
import PageLayout from './PageLayout';

const PageLayoutNav = () => {
  return (
    <PageLayout>
      <div className="fixed mt-[23px] flex w-[363px] h-[39px] justify-center items-center gap-[242px]">
        <img src="Logo.png" alt="로고" />
        <img src="list.svg" alt="list" />
      </div>
    </PageLayout>
  );
};

export default PageLayoutNav;
