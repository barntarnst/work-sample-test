import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as blogActionCreators from './actions';
import { BlogItem } from '../../components';
import './styles.css';

class Blogs extends Component {
	static propTypes = {
		fetchBlogs: PropTypes.func.isRequired,
		blogsReducer: PropTypes.instanceOf(Object).isRequired,
	};



	constructor(props) {
		super(props);
		this.state = {isFetching:false};
	}

	componentDidMount() {
		const { fetchBlogs } = this.props;
    fetchBlogs();
    // console.log(this.props)
	}

	renderBlogs = ({isFetching,blogs}) => {

    if (isFetching || !blogs ) return <div>Loading...</div> ;

return blogs.map((item) => {
  // console.log(item)
  return <BlogItem key={item.id} {...item} />
})

  };




	render() {
		const { blogsReducer} = this.props;
		return (
			<div className="blog-container">
      <div className="blog-count">{ (blogsReducer && blogsReducer.blogs) ? `#${blogsReducer.blogs.length}` : '#' }</div>
				<div className="blog-hero">
					<h1>Lorem ipsum dolor sit </h1>
				</div>
				<div className="blog-button-container">
					<div className="blog-button" onClick={() => this.setState({ activeButton: 'date' })}>
						Date
					</div>
					<div className="blog-button">Alphabetical</div>
				</div>
        <div>
					{this.renderBlogs(blogsReducer)}
          </div>
			</div>
		);
	}
}

const mapStateToProps = ({blogsReducer}) =>{
  // console.log(blogsReducer)
  return {
    blogsReducer
}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ ...blogActionCreators }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Blogs);
