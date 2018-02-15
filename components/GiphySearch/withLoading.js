import React from 'react';

const withLoading = conditionFn => Component => props =>
  (<div>
    <Component {...props} />

    <div className="loading">
      {conditionFn(props) && <span>Loading...</span>}
    </div>
    <style jsx>
      {`
        .loading {
          text-align: center;
        }
      `}
    </style>
  </div>);

export default withLoading;
