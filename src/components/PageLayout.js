import React from 'react';

function PageLayout({ children }) {
  return (
    <div className="w-screen h-screen flex justify-center overflow-x-hidden">
      <div className="w-[393px] min-h-[852px] flex justify-center overflow-x-hidden">
        {children}
      </div>
    </div>
  );
}

export default PageLayout;