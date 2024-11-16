# Middleware
Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.\
Middleware runs before cached content and routes are matched. 

Use the file middleware.js in the root of your project to define Middleware. For example, at the same level as pages or app, or inside src if applicable.
```
import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
}
```

## Matcher
matcher allows you to filter Middleware to run on specific paths.
```
export const config = {
  matcher: '/about/:path*',
}
```
You can match a single path or multiple paths with an array syntax:
```
export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
}
```

## Conditional Statements
```
import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}
```

## NextResponse
The NextResponse API allows you to:

- `redirect` the incoming request to a different URL
- `rewrite` the response by displaying a given URL
- Set request headers for API Routes, `getServerSideProps`, and `rewrite` destinations
- Set response cookies
- Set response headers
- Redirect will 