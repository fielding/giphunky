import React from 'react';

const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx global>
      {`
        body {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

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
