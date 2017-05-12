import React from 'react';
import BlogPostsList from '../../components/blog_posts_list/blog_posts_list';
import PageHeader from '../../components/page_header/page_header';
import BlogPost from '../../sources/blog_post';

export default class NewlyAdded extends React.Component {
  constructor(props) {
    super(props);
    const blogPosts = BlogPost.find();

    this.blogPosts = blogPosts;
  }

  render() {
    return (
      <div className="new-blog-post">
        <PageHeader title="Newly added"/>
        <BlogPostsList blogPosts={this.blogPosts}/>
      </div>
    );
  }
}
