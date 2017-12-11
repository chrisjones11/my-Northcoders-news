import React from 'react';
import PT from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import fetchArticles from '../actions/articles';
import List from './List';

class Articles extends React.Component {
  constructor (props) {
    super(props);
  }
  componentDidMount () {
    this.props.fetchArticles(this.props.match.url);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname !== nextProps.match.url){
      this.props.fetchArticles(nextProps.match.url);
    }
 
  }

  render () {
    {console.log('render', this.props.match.url);}
    const {articles, loading, error} = this.props;
    return (
      <div >
       
        {error && <Redirect to='/404' />}
        {loading || articles.length === 0 ? 
          ( <p>Loading...</p>) : ( <List list = {articles}/> )}
      </div>
    );
  }
}


Articles.propTypes = {
  location:PT.object,
  match:PT.object,
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
  fetchArticles: (topics) => {
    console.log();
    dispatch(fetchArticles(topics));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(Articles);
