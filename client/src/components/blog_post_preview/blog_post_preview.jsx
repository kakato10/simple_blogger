import React from 'react';
import {Card, CardActions, CardHeader, CardText, CardMedia, CardTitle} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import moment from 'moment';
import ReactMarkdown from 'react-markdown';

import './blog_post_preview.scss';

const chipStyles = {
  margin: 4,
};

export default class BlogPostPreview extends React.Component {
  renderTags(tags) {
    return (
      <div className="tags">
        {tags.map((tag, id) => (
          <Chip
            key={id}
            style={chipStyles}
          >
            {tag}
          </Chip>
        ))}
      </div>
    );
  }

  render() {
    const {expand, showImage, blogPost} = this.props;
    const {title, author, created, content, tags, imageUrl} = blogPost;
    const dateCreated = moment(created).format('MMMM Do YYYY, hh:mm');

    return (
      <Card
        className="post-preview"
        style={{
          marginBottom: 20
        }}>
        { showImage && imageUrl &&
          <CardMedia>
            <img src={imageUrl} alt="Blog post"/>
          </CardMedia>
        }
        <CardHeader
          title={title}
          subtitle={`${author} posted on ${dateCreated}`}
          actAsExpander
          showExpandableButton
        />
        <div className="tags">
          {this.renderTags(tags)}
        </div>
        <CardText
          expandable
          actAsExpander>
          <ReactMarkdown source={content}/>
        </CardText>
        {this.props.children}
      </Card>
    );
  }
}

BlogPostPreview.defaultProps = {
  showImage: true
}

BlogPostPreview.propTypes = {
  blogPost: React.PropTypes.object.isRequired,
  children: React.PropTypes.node,
  showImage: React.PropTypes.bool
};
