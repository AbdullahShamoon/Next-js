# Components
## < Link >
< Link > is a React component that extends the HTML < a > element to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.

```
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

## < Script >
To load a third-party script for multiple routes, import next/script and include the script directly in your layout component:

```
import Script from 'next/script'
 
export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  )
}
```

#### Inline Scripts
Inline scripts, or scripts not loaded from an external file, are also supported by the Script component. They can be written by placing the JavaScript within curly braces:

```
<Script>
  {`alert("This is Inline Script")`}
</Script>
```

- ### Props

<li>src</li>
<li>strategy</li>
<li>onLoad</li>
<li>onReady</li>
<li>onError</li>

#### **strategy**
The loading strategy of the script. There are four different strategies that can be used:

- ***beforeInteractive***: Load before any Next.js code and before any page hydration occurs.
- ***afterInteractive***: (default) Load early but after some hydration on the page occurs.
- ***lazyOnload***: Load during browser idle time.
- ***worker***: (experimental) Load in a web worker.	

## < Image >
The Next.js Image component extends the HTML < img > element with features for automatic image optimization:

**Size Optimization:** Automatically serve correctly sized images for each device, using modern image formats like WebP and AVIF.\
**Visual Stability:** Prevent layout shift automatically when images are loading.\
**Faster Page Loads:** Images are only loaded when they enter the viewport using native browser lazy loading, with optional blur-up placeholders.\
**Asset Flexibility:** On-demand image resizing, even for images stored on remote servers

### Usage
```
import Image from 'next/image'
```
The Image Component requires the following properties: src, alt, width and height (or fill).
```
import Image from 'next/image'
 
export default function Page() {
  return (
    <div>
      <Image
        src="/profile.png"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}
```
To protect your application from malicious users, configuration is required in order to use external images. This ensures that only external images from your account can be served from the Next.js Image Optimization API. These external images can be configured with the *remotePatterns* property in your *next.config.js* file, as shown below:

```
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/account123/**',
        search: '',
      },
    ],
  },
}
```

