import React from 'react';

class GiphySearch extends React.Component {
  render() {
    return (
      <div className="search">
        <div>
          <form type="submit">
            <input type="text" ref={node => this.input = node} />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="results">
        </div>
        <style jsx>
          {`
            .search {
            }
          `}
        </style>
      </div>
    );
  }
}


export default GiphySearch;