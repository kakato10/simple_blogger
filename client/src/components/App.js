import React from 'react';
import './app.scss';
import {BrowserRouter, Route, Redirect, NavLink} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import NewBlogPost from '../containers/new_blog_post/new_blog_post';
import AllBlogPosts from '../containers/all_blog_posts/all_blog_posts';
import NewlyAdded from '../containers/newly_added/newly_added';
import BlogPostEdit from '../containers/blog_post_edit/blog_post_edit';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <MuiThemeProvider>
          <div>
            <BrowserRouter>
              <div>
                <div className="header">
                  <h1>Simple Blogger</h1>
                  <div>
                    <NavLink to="/">
                      Home
                    </NavLink>
                    <NavLink to="/all">
                      All Posts
                    </NavLink>
                    <NavLink to="/new">
                      New Post
                    </NavLink>
                  </div>
                </div>
                <Route exact path="/" component={NewlyAdded} />
                <Route path="/all" component={AllBlogPosts} />
                <Route path="/new" component={NewBlogPost} />
                <Route path="/post/:postId" component={BlogPostEdit}/>
              </div>
            </BrowserRouter>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
