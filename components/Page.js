import React from 'react';

const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx global>
      {`
        .page {
        }
      `}
    </style>
  </div>
);

export default Page;
