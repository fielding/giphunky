import React from 'react';

const applyUpdateResult = result => prevState => ({
  data: [...prevState.data, ...result.data],
  page: ( result.pagination.offset / 20 ),
  isError: false,
  isLoading: false,
});

const applySetResult = result => prevState => ({
  data: result.data,
  page: ( result.pagination.offset / 20 ),
  isError: false,
  isLoading: false,
});

const applySetError = prevState => ({
  isError: true,
  isLoading: false,
});

const getGiphySearchUrl = (value, page) =>
  `http://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&limit=20&offset=${page * 20}`;

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: null,
      isLoading: false,
      isError: false,
    };
  }

  onInitialSearch = e => {
    e.preventDefault();

    const { value } = this.input;

    if (value === '') {
      return;
    }

    this.fetchResults(value, 0);
  }

  fetchResults = (value, page) => {
    this.setState({ isLoading: true });
    fetch(getGiphySearchUrl(value, page))
      .then(response => response.json())
      .then(result => this.onSetResult(result, page))
      .catch(this.onSetError);
  }

  onSetError = () =>
    this.setState(applySetError);

  onSetResult = (result, page) => (
    page === 0
      ? this.setState(applySetResult(result))
      : this.setState(applyUpdateResult(result))
  )

  render() {
    return (
      <div className="search">
        <div>
          <form type="submit" onSubmit={this.onInitialSearch}>
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