import React from 'react';

const Page = ({ children }) => (
  <div className="page">
    {children}
    <style jsx global>
      {`
        body {
          border-top: 4px solid #26A9E0;
          border-image-source: linear-gradient(to left, #2f80ed, #56ccf2);
          border-image-slice: 4;
          margin: 0;
          padding: 0;
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
