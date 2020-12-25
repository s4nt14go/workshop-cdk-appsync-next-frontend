export const getPostById = `
  query getPostById($postId: ID!) {
    getPostById(postId: $postId) {
      id
      title
      content
      owner
    }
  }
`

export const listPosts = `
  query ListPosts  {
    listPosts {
      id
      title
      content
      owner
    }
  }
`

export const postsByUsername = `
  query PostsByUsername {
    postsByUsername {
      id
      title
      content
      owner
    }
  }
`

export const createPost = `
  mutation CreatePost(
    $post: PostInput!
  ) {
    createPost(post: $post) {
      id
      title
      content
      owner
    }
  }
`

export const updatePost = `
  mutation UpdatePost(
    $post: UpdatePostInput!
  ) {
    updatePost(post: $post) {
      id
      title
      content
    }
  }
`

export const deletePost = `
  mutation DeletePost(
    $postId: ID!
  ) {
    deletePost(postId: $postId)
  }`
