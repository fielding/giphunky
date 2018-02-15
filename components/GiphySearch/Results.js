import { compose } from '../../lib/compose';
import List from './List';
import withLoading from './withLoading';
import withPaginated from './withPaginated';

const paginatedCondition = props =>
  props.page !== null && !props.isLoading;

const loadingCondition = props =>
  props.isLoading;

const Results = compose(
  withPaginated(paginatedCondition),
  withLoading(loadingCondition),
)(List);

export default Results;