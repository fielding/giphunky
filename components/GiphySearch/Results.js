import { compose } from '../../lib/compose';
import List from './List';
import withLoading from './withLoading';
import withPaginated from './withPaginated';
import withInfiniteScroll from './withInfiniteScroll';

const paginatedCondition = props =>
  props.page !== null && !props.isLoading && props.isError;

const infiniteScrollCondition = props =>
    (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 250)
  && props.list.length
  && !props.isLoading
  && !props.isError;

const loadingCondition = props =>
  props.isLoading;

const Results = compose(
  withPaginated(paginatedCondition),
  withInfiniteScroll(infiniteScrollCondition),
  withLoading(loadingCondition),
)(List);

export default Results;