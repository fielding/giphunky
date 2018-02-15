import { compose } from '../../lib/compose';
import List from './List';
import withLoading from './withLoading';

const loadingCondition = props =>
  props.isLoading;

const Results = compose(
  withLoading(loadingCondition),
)(List);

export default Results;