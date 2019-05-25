import React from 'react';
import gradientify from '../components/Gradientify';

const Page = ({ children, gradient, background }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { gradient, background }),
  );

  return (
    <div className="page">
      {childrenWithProps}

      <style jsx global>
        {`
          html,
          body,
          #__next {
            height: 100%;
          }

          body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            text-rendering: geometricprecision;
            font-size: 18px;
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
};

export default gradientify(Page);
