import React from 'react';
import BlogPostsList from '../../components/blog_posts_list/blog_posts_list';
import PageHeader from '../../components/page_header/page_header';
import BlogPost from '../../sources/blog_post';

export default class NewlyAdded extends React.Component {
  constructor(props) {
    super(props);

    const blogPostsCount = 15;

    this.blogPosts = _.slice(BlogPost.find(), 0, blogPostsCount);
  }

  render() {
    return (
      <div className="new-blog-post">
        <PageHeader title="Newly Added"/>
        <BlogPostsList blogPosts={this.blogPosts}/>
      </div>
    );
  }
}
