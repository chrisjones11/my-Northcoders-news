import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import fetchArticles from '../actions/articles';
import List from './List';

class HomePage extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchArticles();
  }
  render () {
    const {articles, loading, error} = this.props;
    return (
      <div>
        <h2>HomePage</h2>
        {error && <Redirect to='/404' />}
        {loading || articles.length === 0 ? 
          ( <p>Loading...</p>) : ( <div><List list = {articles}/></div> )}
      </div>
    );
  }
}

HomePage.propTypes = {
  articles: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticles: PT.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: () => {
    dispatch(fetchArticles());
  }
});

//add topics to fetchArticles to fetch them dynamicly instead

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

