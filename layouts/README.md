# layout.js
The `layout` file is used to define a layout in your Next.js application.
```
export default function DashboardLayout({ children }) {
  return <section>{children}</section>
}
```

A root layout is the top-most layout in the `root` app directory. It is used to define the `<html>` and `<body>` tags and other globally shared UI.
```
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```