import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import BlogPostPreview from '../blog_post_preview/blog_post_preview';
import BlogPost from '../../sources/blog_post';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router';

const chipStyles = {
  margin: 4,
};

class BlogPostExtendedPreview extends React.Component {
  render() {
    return (
      <BlogPostPreview blogPost={this.props.blogPost}>
        <CardActions>
          <NavLink to={`/post/${this.props.blogPost.id}`}>
            <FlatButton
              primary
              label="Edit">
            </FlatButton>
          </NavLink>
          <FlatButton
            secondary
            label="Delete"
            onTouchTap={() => {
              BlogPost.remove(this.props.blogPost);
              this.props.history.push('/all');
            }}/>
        </CardActions>
      </BlogPostPreview>
    )
  }
}

export default withRouter(BlogPostExtendedPreview);

BlogPostPreview.propTypes = {
  blogPost: React.PropTypes.object.isRequired,
  history: React.PropTypes.object.isRequired
};
