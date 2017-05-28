import React from 'react';
import _ from 'lodash';
import BlogPostsList from '../../components/blog_posts_list/blog_posts_list';
import PageHeader from '../../components/page_header/page_header';
import BlogPost from '../../sources/blog_post';

export default class AllBlogPosts extends React.Component {
  constructor(props) {
    super(props);

    this.blogPosts = BlogPost.find();
  }

  shouldComponentUpdate(nextProps) {
    const blogPosts = BlogPost.find();

    return !_.isEqual(blogPosts, this.blogPosts);
  }

  componentWillUpdate() {
    this.blogPosts = BlogPost.find();
  }

  render() {
    return (
      <div className="new-blog-post">
        <PageHeader title="All Blog Posts"/>
        <BlogPostsList
          blogPosts={this.blogPosts}
          extended/>
      </div>
    );
  }
}
