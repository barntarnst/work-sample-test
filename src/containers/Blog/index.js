import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blogActionCreators from './actions';
import { BlogItem } from '../../components';
import './styles.css';

/**
 * Blogs container
 *@class
 */
class Blogs extends Component {
  static propTypes = {
    fetchBlogs: PropTypes.func.isRequired,
    blogsReducer: PropTypes.instanceOf(Object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      // default selection date
      selected: 'date',
    };
  }

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

    /**
     * sorts blogs in alphabetical order
     */
    const sortByAlpha = [...blogs];
    sortByAlpha.sort((a, b) => {
      const dateA = a.title.rendered.substring(0, 10);
      const dateB = b.title.rendered.substring(0, 10);
      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
    return sortByAlpha.map(item => <BlogItem key={item.id} {...item} />);
  }

  render() {
    const { blogsReducer } = this.props;
    const { selected } = this.state;
    /* eslint-disable */
    return (
      <div className="blog-container">
        <div className="blog-count">
          {blogsReducer && blogsReducer.blogs
            ? `#${blogsReducer.blogs.length}`
            : '#'}
        </div>
        <div className="blog-hero">
          <h1>Lorem ipsum dolor sit </h1>
        </div>
        <div className="blog-button-container">
          <div
            aria-selected="true"
            className={`blog-button {" "} ${selected === 'date' ? '' : 'button-in-active'}`}
            onClick={() => this.setState({ selected: 'date' })}
          >
          Date
            </div>
          <div
            className={`blog-button {" "} ${selected !== 'date' ? '' : 'button-in-active'}`}
            onClick={() => this.setState({ selected: 'alphabetical' })}
          >Alphabetical</div>
        </div>
        <div>{this.renderBlogs(blogsReducer, selected)}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ blogsReducer }) => ({
  blogsReducer,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...blogActionCreators }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);

/*
		// date sorting for future references
					console.log(	[...blogs]);
			const newDate = [...blogs];
			newDate.sort((a, b) => {
				const dateA = a.date;
				const dateB = b.date;
				if (dateA < dateB) { return -1; }
				if (dateA > dateB) { return 1; }
				return 0;
			});
			console.log(newDate);

*/
