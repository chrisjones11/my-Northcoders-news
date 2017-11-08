import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import fetchArticlesCommentsById from '../actions/articlesCommentsById';

// {console.log('render', this.props.match.params.id);}

class ArticleById extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    this.props.fetchArticlesCommentsById(this.props.match.params.id);
  }

  render() {
    return (
      <div >
        <h1>hello articlesbyid</h1>
      </div>
    );
  }
}

ArticleById.propTypes = {
  location:PT.object,
  match:PT.object,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticlesCommentsById: PT.func.isRequired
};

const mapStateToProps = state => ({
  articles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticlesCommentsById: (topics) => {
    dispatch(fetchArticlesCommentsById(topics));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleById);
