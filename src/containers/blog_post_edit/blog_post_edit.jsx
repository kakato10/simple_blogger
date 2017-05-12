import React from 'react';
import { withRouter } from 'react-router';

import PageHeader from '../../components/page_header/page_header';
import BlogPostEditComponent from '../../components/blog_post_edit/blog_post_edit';
import BlogPost from '../../sources/blog_post';

class BlogPostEdit extends React.Component {
  constructor(props) {
    super(props);

    this.blogPost = BlogPost.findOne({
      id: props.match.params.postId
    });
  }

  render() {
    return (
      <div className="new-blog-post">
        <PageHeader title="Edit Blog Post"/>
        <BlogPostEditComponent
          label="Update"
          blogPost={this.blogPost}
          onConfirm={(post) => {
            BlogPost.updateOne({
              id: post.id
            }, post);

            this.props.history.push('/');
          }}/>
      </div>
    );
  }
}

BlogPostEdit.propTypes = {
  match: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};

export default withRouter(BlogPostEdit);
