import React from 'react';
import { debounce } from '../../lib/debounce';

const withInfiniteScroll = conditionFn => Component =>
  class WithInfiniteScroll extends React.Component {

    componentDidMount() {
      window.addEventListener('scroll', this.debounced, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.debounced, false);
    }

    onScroll = () => {
      conditionFn(this.props) && this.props.onPaginatedSearch();
    }

    debounced = debounce(this.onScroll, 250);

    render() {
      return <Component {...this.props} />;
    }
  };

export default withInfiniteScroll;
