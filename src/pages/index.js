import React from "react"
import { graphql } from "react-relay"
import withData from "../utils/withData"
import BlogPosts from "../components/BlogPosts"

class Index extends React.PureComponent {
  static displayName = `Index`

  render (props) {
    return (
      <div>
        <h1>Posts</h1>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map(id =>(
            <div key={id}><a href={`/posts/${id}`}>Post {id}</a></div>
          ))
        }
      </div>
    )
  }
}

export default withData(Index, {
  query: graphql`
    query pages_indexQuery {
      viewer {
        ...BlogPosts_viewer
      }
    }
  `
})
