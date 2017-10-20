import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import fetchFootballArticles from '../actions/footballArticles';
import List from './List';

class Football extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchFootballArticles();
  }
  render () {
    const {footballArticles, loading, error} = this.props;
    return (
      <div>
        <h2>Football</h2>
        {error && <Redirect to='/404' />}
        {loading || footballArticles.length === 0 ? 
          (<p>Loading...</p>) : ( <div><List list = {footballArticles}/></div> )}
      </div>
    );
  }
}

Football.propTypes = {
  footballArticles: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchFootballArticles: PT.func.isRequired
};

const mapStateToProps = state => ({
  footballArticles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});

const mapDispatchToProps = dispatch => ({
  fetchFootballArticles: () => {
    dispatch(fetchFootballArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Football);

