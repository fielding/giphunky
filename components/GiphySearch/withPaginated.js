import React from 'react';

const withPaginated = conditionFn => Component => props =>
  (<div>
    <Component {...props} />

    <div className="paginated">
      {
        conditionFn(props) &&
        <div>
          <div>
            Something went wrong...
          </div>
          <button
            type="button"
            onClick={props.onPaginatedSearch}
          >
            Try Again
          </button>
        </div>
      }
    </div>
    <style jsx>
      {`
        .paginated {
          text-align: center;
        }
      `}
    </style>
  </div>);

export default withPaginated;
