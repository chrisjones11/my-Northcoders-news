import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import fetchArticleComments from '../actions/articleComments';

// {console.log('render', this.props.match.params.id);}

class ArticleComments extends React.Component {
  constructor (props) {
    super(props);
  }
  
  componentDidMount () {
    this.props.fetchArticleComments(this.props.match.params.id);
  }

  render() {
    return (
      <div >
        <h1>{this.props.articles[0].title}</h1>
        <p>{this.props.articles[0].body}</p>
        <p>{this.props.articles[0].belongs_to}</p>
      </div>
    );
  }
}

ArticleComments.propTypes = {
  articles: PT.array,
  location:PT.object,
  match:PT.object,
  loading: PT.bool.isRequired,
  error: PT.any,
  fetchArticleComments: PT.func.isRequired
};

const mapStateToProps = state => ({
  comments: state.comments.data,
  articles: state.articles.data,
  loading: state.articles.loading,
  error: state.articles.error
});

const mapDispatchToProps = dispatch => ({
  fetchArticleComments: (articleId) => {
    dispatch(fetchArticleComments(articleId));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticleComments);
