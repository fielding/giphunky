import React from 'react';

const withPaginated = conditionFn => Component => props =>
  (<div>
    <Component {...props} />

    <div className="paginated">
      {
        conditionFn(props) &&
        <div>
          <button
            type="button"
            onClick={props.onPaginatedSearch}
          >
            More
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
