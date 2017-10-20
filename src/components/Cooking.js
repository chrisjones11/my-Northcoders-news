import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import fetchCookingArticles from '../actions/cookingArticles';
import List from './List';

class Cooking extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchCookingArticles();
  }
  render () {
    const {cookingArticles, loading, error} = this.props;
    return (
      <div>
        <h2>Football</h2>
        {error && <Redirect to='/404' />}
        {loading ||cookingArticles.length === 0 ? 
          (<p>Loading...</p>) : ( <div><List list = {cookingArticles}/></div> )}
      </div>
    );
  }
}

Cooking.propTypes = {
  cookingArticles: PT.array.isRequired,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchCookingArticles: PT.func.isRequired
};

const mapStateToProps = state => ({
  cookingArticles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});

const mapDispatchToProps = dispatch => ({
  fetchCookingArticles: () => {
    dispatch(fetchCookingArticles());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cooking);

