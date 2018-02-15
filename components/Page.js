import React from 'react';

const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx global>
      {`
        .page {
          display: flex;
          justify-content: center;
          text-align: center;
        }
      `}
    </style>
  </div>
);

export default Page;
