import React from 'react';
import Results from './Results';

const applyUpdateResult = result => prevState => ({
  data: [...prevState.data, ...result.data],
  page: ( result.pagination.offset / 20 ),
  isError: false,
  isLoading: false,
});

const applySetResult = result => () => ({
  data: result.data,
  page: ( result.pagination.offset / 20 ),
  isError: false,
  isLoading: false,
});

const applySetError = () => ({
  isError: true,
  isLoading: false,
});

const getGiphySearchUrl = (value, page) =>
  `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=dc6zaTOxFJmzC&limit=20&offset=${page * 20}`;

class GiphySearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      page: null,
      value: null,
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

  onPaginatedSearch = () =>
    this.fetchResults(this.state.value, this.state.page + 1);

  onSetError = () =>
    this.setState(applySetError);

  onSetResult = (result, page) => (
    page === 0
      ? this.setState(applySetResult(result))
      : this.setState(applyUpdateResult(result))
  )

  fetchResults = (value, page) => {
    this.setState({
      isLoading: true,
      value,
    });
    fetch(getGiphySearchUrl(value, page))
      .then(response => response.json())
      .then(result => this.onSetResult(result, page))
      .catch(this.onSetError);
  }

  render() {
    return (
      <div className="search">
        <div className="input-container">
          <form type="submit" onSubmit={this.onInitialSearch}>
            <input type="text" ref={node => { this.input = node; }} />
            <button type="submit">
              <svg viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
            </button>
          </form>
        </div>
        <Results
          list={this.state.data}
          page={this.state.page}
          isError={this.state.isError}
          isLoading={this.state.isLoading}
          onPaginatedSearch={this.onPaginatedSearch}
        />
        <style jsx>
          {`
            form {
              width: 800px;
              display:flex;
              padding: 32px;
            }
            input {
              outline: none;
              border: 1px solid #dddddd;
              font-size: 14px;
              height: 28px;
              width: 100%;
            }

            button {
              padding: 3px;
              border: 1px solid #dddddd;
              color: #fff;
              cursor: pointer;
              font-size: 18px;
              background: #26A9E0;
              background: -webkit-linear-gradient(to top, #2F80ED, #56CCF2);
              background: linear-gradient(to top, #2f80ed, #56ccf2);
              width: 32px;
              height: 32px;
            }

            svg {
              fill: #fff;
            }


            .input-container {
              display: flex;
              justify-content: center;
            }

          `}
        </style>
      </div>

    );
  }
}


export default GiphySearch;
