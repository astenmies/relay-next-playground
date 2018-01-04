# relay-next-playground

A playground project experimenting custom routing, server-side rendering and GraphQL with [Relay](https://github.com/facebook/relay/) and [Next.js](https://github.com/zeit/next.js/)

## Custom Routing with Parameters
Matching path parameters to corresponding pages isn't supported out-of-box by [Next.js](https://github.com/zeit/next.js/).

In this example, [a custom server](https://github.com/stanleysq/relay-next-playground/blob/master/src/server.js) is configured so that any positive integer segment in the URL path will transformed to `"$param"` to match the corresponding page and the original value will be stored as query string instead.

For instance, `/posts/6/comments/62` will be matched to `src/pages/$param/comments/$param.js` in the filesystem and the IDs `6` and `62` will be provided in the query object.

## Try it Yourself
```bash
yarn install
yarn relay
yarn dev
```
And then visit http://localhost:3000/.
