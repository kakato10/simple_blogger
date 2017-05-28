import React from 'react';
import BlogPostPreview from '../blog_post_preview/blog_post_preview';
import BlogPostExtendedPreview from '../blog_post_extended_preview/blog_post_extended_preview';

export default class BlogPostList extends React.Component {
  // getBlogPostPreview(post, id) {
  //   return this.props.extended
  //     ? (<BlogPostExtendedPreview key={id} blogPost={post}/>)
  //     : (<BlogPostPreview key={id} blogPost={post}/>)
  // }

  render() {
    return (
      <div className="basic-post-list">
        {_.map(this.props.blogPosts, (post, id) => {
          return this.props.extended
            ? (<BlogPostExtendedPreview key={id} blogPost={post}/>)
            : (<BlogPostPreview key={id} blogPost={post}/>)
        })}
      </div>
    )
  }
}

BlogPostPreview.defaultProps = {
  extended: false
};

BlogPostPreview.propTypes = {
  blogPosts: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  extended: React.PropTypes.boolean
};
