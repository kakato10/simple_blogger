/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import Chip from 'material-ui/Chip';
import RaisedButton from 'material-ui/RaisedButton';
import _ from 'lodash';

import './blog_post_edit.scss';

const chipStyles = {
  margin: 4,
};

export default class BlogPostEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogPost: _.cloneDeep(props.blogPost)
    };
  }

  onTagInputChange(value) {
    const separator = ' ';

    if (_.last(value.split('')) === separator) {
      const tag = value.slice(0, -1);
      const blogPost = _.cloneDeep(this.state.blogPost);

      if (!(blogPost.tags instanceof Array)) {
        blogPost.tags = [tag];
      } else {
        blogPost.tags.push(tag);
      }

      this._tagsInputField.input.value = '';

      this.setState({
        blogPost
      });
    }
  }

  onRemoveTag(tagId) {
    const blogPost = _.cloneDeep(this.state.blogPost);

    blogPost.tags = _.filter(blogPost.tags, (tag, id) => {
      return tagId !== id;
    });

    this.setState({
      blogPost
    });
  }

  getOnChangeFn(field) {
    return (ev, value) => {
      const blogPost = _.cloneDeep(this.state.blogPost);

      blogPost[field] = value;

      this.setState({
        blogPost
      });
    };
  }

  renderTags(tags) {
    return (
      <div className="tags">
        {tags.map((tag, id) => (
          <Chip
            key={id}
            onRequestDelete={() => {
              this.onRemoveTag(id);
            }}
            style={chipStyles}
          >
            {tag}
          </Chip>
        ))}
      </div>
    );
  }

  render() {
    const {label} = this.props;
    const {blogPost} = this.state;

    return (
      <div className="blog-post-edit">
        <div className="blog-post-form">
          <TextField
            hintText="Title"
            floatingLabelText="Title"
            className="material-input"
            onChange={this.getOnChangeFn('title')}
            value={blogPost.title}
            fullWidth/>
          <TextField
            hintText="Author"
            floatingLabelText="Author"
            className="material-input"
            onChange={this.getOnChangeFn('author')}
            value={blogPost.author}
            fullWidth/>
          <TextField
            hintText="Post"
            floatingLabelText="Post"
            className="material-input"
            multiLine
            rows={5}
            onChange={this.getOnChangeFn('content')}
            value={blogPost.content}
            fullWidth/>
          <TextField
            hintText="Image URL"
            floatingLabelText="Image URL"
            className="material-input"
            onChange={this.getOnChangeFn('imageUrl')}
            value={blogPost.imageUrl}
            fullWidth/>
          <TextField
            hintText="Tags"
            floatingLabelText="Tags"
            className="material-input"
            onChange={(ev, value) => {
              this.onTagInputChange(value);
            }}
            fullWidth
            ref={(node) => {
              this._tagsInputField = node
            }}/>
          {this.renderTags(blogPost.tags)}
          <Toggle
            label="Active"
            className="toggler"
            toggled={this.state.blogPost.isActive}
            onToggle={this.getOnChangeFn('isActive')}/>
        </div>
        <RaisedButton
          label={this.props.label}
          primary
          fullWidth
          onTouchTap={() => {
            this.props.onConfirm(this.state.blogPost);
          }}/>
      </div>
    );
  }
}

BlogPostEdit.defaultProps = {
  blogPost: {
    tags: []
  }
};

BlogPostEdit.propTypes = {
  label: React.PropTypes.string.isRequired,
  blogPost: React.PropTypes.object.isRequired,
  onConfirm: React.PropTypes.func.isRequired
};
