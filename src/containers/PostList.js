import React from 'react';
import PropTypes from 'prop-types';

import { Post } from 'Post';

class PostList extends React.Component {
  render() {
    return (
      <div>
        <Post />
      </div>
    );
  }
}

PostList.propTypes = {};

export default PostList;