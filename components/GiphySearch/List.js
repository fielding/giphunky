import React from 'react';
import gradients from '../../constants/gradients';


const List = ({list, gradient}) =>
  (<div className="container">
    <ul>
      {list.map((item, index) => {
        const divStyle = {
          width: '260px',
          height: `${item.images.downsized.height * (260 / item.images.downsized.width)}px`,
        };

        return (
          <li key={item.id}>
            <div className="placeholder" style={divStyle}>
              <a href={item.url}>
                <img className="item" src={item.images.downsized.url} alt={item.title} />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
    <style jsx>
      {`
        .placeholder,
        .placeholder:before,
        .placeholder:after {
          background: linear-gradient(45deg, ${gradient.start}, ${gradient.end});
        }
      `}
    </style>
    <style jsx>
      {`
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
          -moz-column-count: 3;
          -moz-column-gap: 24px;
          -webkit-column-count: 3;
          -webkit-column-gap: 24px;
          column-count: 3;
          column-gap: 24px;
          width: 830px;
        }

        li {
          margin-bottom: 24px;
          break-inside: avoid;
        }

        img {
          display: inline-block;
          margin-bottom: 0px;
          width: 100%;
          height: auto;
          color: rgba(0, 0, 0, 0);
          position: relative;
        }

        a {
          text-decoration: none;
          color: #212121;
        }

        .placeholder {
          display: inline-block;
          position: relative;
          z-index: 0;
        }

        .placeholder:before {
          content: '';
          position: absolute;
          height: calc(100% + 6px);
          width: calc(100% + 6px);;
          display: block;
          top: -3px;
          left: -3px;
          z-index: -1;
        }

        .placeholder:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          display: block;
          top: 9px;
          left: 9px;
          z-index: -2;

        }

        .container {
          margin: 0 auto;
        }
      `}
    </style>
  </div>);

export default List;
