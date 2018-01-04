import React, { Component } from "react"
import { graphql } from "react-relay"
import withData from "../utils/withData"
import BlogPosts from "../components/BlogPosts"

class Relay extends Component {
  static displayName = `Relay`

  render (props) {
    return (
      <div>
        <BlogPosts viewer={this.props.viewer} />
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
