# Dynamic Routes
When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.

## Convention
A Dynamic Segment can be created by wrapping a folder's name in square brackets: [folderName]. For example, [id] or [slug].

Dynamic Segments are passed as the params prop to layout, page, route, and generateMetadata functions.

##  Example
For example, a blog could include the following route app/blog/[slug]/page.js where [slug] is the Dynamic Segment for blog posts.

```
export default async function Page({ params }) {
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}
```
OR
```
export default async function Page({ params }) {
  return <div>My Post: {params.slug}</div>
}
```