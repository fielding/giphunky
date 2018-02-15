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
        }
        .item {
        }
      `}
    </style>
  </div>);

export default List;