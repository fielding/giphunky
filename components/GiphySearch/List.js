import React from 'react';

const List = ({ list }) =>
  (<div>
    <div className="results">
      {list.map(item => (
        <div className="item" key={item.id}>
          <a href={item.url}>
            <img src={item.images.downsized.url} alt={item.title} />
          </a>
        </div>
      ))}
    </div>
    <style jsx>
      {`
        .results {
          margin: 20px 0;
          display: flex;
          flex-wrap: wrap;
          width: 800px;
          border: 1px solid #e3e3e3;
          border-radius: 5px;
        }
        .item {
          display: flex;
          padding: 5px;
        }
      `}
    </style>
  </div>);

export default List;