import React from 'react';

const List = ({ list }) =>
  (<div className="container">
    <ul>
      {list.map((item, index) => {
        const divStyle = {
          width: '260px',
          height: `${item.images.downsized.height * (260 / item.images.downsized.width)}px`,
          backgroundColor: index % 2 ? '#ddd' : '#bbb',
        };

        return (
          <li key={item.id}>
            <div className="placeholder" style={divStyle}>
              <a href={item.url}>
                <img src={item.images.downsized.url} alt={item.title} />
              </a>
            </div>
          </li>
        );
      })}
    </ul>
    <style jsx>
      {`
        ul {
          line-height: 0;
          -moz-column-count: 3;
          -moz-column-gap: 10px;
          -webkit-column-count: 3;
          -webkit-column-gap: 10px;
          column-count: 3;
          column-gap: 10px;
          width: 800px;
          list-style: none;
        }

        li {
          padding-bottom: 10px;
        }

        img {
          display: inline-block;
          margin-bottom: 0px;
          width: 100%;
          height: auto;
        }

        a {
          text-decoration: none;
          color: #212121;
        }

        .placeholder {
          display: block;
        }

        .container {
          width: 800px;
          margin: 0 auto;
        }
      `}
    </style>
  </div>);

export default List;
