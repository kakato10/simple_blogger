import EntityStore from './entity_store';

const PERSISTENCE_KEY = 'blog_post';

class BlogPost extends EntityStore {
  constructor() {
    super(PERSISTENCE_KEY);
  }
}

export default new BlogPost();
