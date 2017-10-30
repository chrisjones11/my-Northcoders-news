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
    // console.log(this.props.match.url);
    this.props.fetchArticles(this.props.match.url);
  }
  render () {
    {console.log('render', this.props.match.url);}
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
//advice on what to do with the redirect /404 if anything

HomePage.propTypes = {
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


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

// i want component did mount to call fetcharticles with a topic which i think will be in the url
// so homepage should be called articles instead which renders either what cooking football or 
// homepage is loading now
