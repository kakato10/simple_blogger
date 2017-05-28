import _ from 'lodash';
import React from 'react';
import { withRouter } from 'react-router';

import BlogPostEdit from '../../components/blog_post_edit/blog_post_edit';
import PageHeader from '../../components/page_header/page_header';
import BlogPost from '../../sources/blog_post';

class NewBlogPost extends React.Component {
  render() {
    return (
      <div className="new-blog-post">
        <PageHeader title="New Blog Post"/>
        <BlogPostEdit
          label="Create"
          onConfirm={(post) => {
            BlogPost.create(post);
            this.props.history.push('/');
          }}/>
      </div>
    );
  }
}

BlogPostEdit.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default withRouter(NewBlogPost)
