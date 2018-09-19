import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blogActionCreators from './actions';
import { BlogItem } from '../../components';
import './styles.css';
import { Container } from '../../theme/grid';
import { alphabetical } from '../../utils/sorting';

/**
 * Blogs container
 *@class
 */
class Blogs extends Component {
  static propTypes = {
    fetchBlogs: PropTypes.func.isRequired,
    blogsReducer: PropTypes.instanceOf(Object).isRequired,
  }

  state = {
    selected: 'date',
  };

  componentDidMount() {
    const { fetchBlogs } = this.props;
    fetchBlogs();
  }

  /**
 * Render blogs sort by Date(default)
 * @method
 * @param {object} blogReducer - An object param
 * @return {string} A selected button string
 */
  renderBlogs = (blogReducer, selected) => {
    const { isFetching, blogs } = blogReducer;
    if (isFetching || !blogs) return <div>Loading...</div>;

    if (selected === 'date') {
      return blogs.map(item => <BlogItem key={item.id} {...item} />);
    }

    // sorts blogs in alphabetical order
    const sortByAlpha = [...blogs];
    sortByAlpha.sort(alphabetical);
    return sortByAlpha.map(item => <BlogItem key={item.id} {...item} />);
  }

  render() {
    const { blogsReducer } = this.props;
    const { selected } = this.state;
    /* eslint-disable */
    return (
      <Container>
        <div className="blog-count">
          {blogsReducer && blogsReducer.blogs
            ? `#${blogsReducer.blogs.length}`
            : '#'}
        </div>

        <div className="blog-hero">
          <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <div className="blog-button-container">
          <div
            className={`blog-button {" "} ${selected === 'date' ? '' : 'button-in-active'}`}
            onClick={() => this.setState({ selected: 'date' })}
          >
          Date
            </div>
          <div
            className={`blog-button {" "} ${selected !== 'date' ? '' : 'button-in-active'}`}
            onClick={() => this.setState({ selected: 'alphabetical' })}
          >Alphabetical
          </div>
        </div>
       {this.renderBlogs(blogsReducer, selected)}
  </Container>
    );
  }
}

const mapStateToProps = ({ blogsReducer }) => ({
  blogsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...blogActionCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
