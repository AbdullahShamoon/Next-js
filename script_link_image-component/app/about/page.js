import React from 'react'
import Script from 'next/script'

const about = () => {
  return (
    <div>
      <Script>{`alert("This is About Page")`}</Script>
      About page
      </div>
  )
}

export default about
export const metadata = {
  title: "Next.js - About page",
  description: "About page of our app",
};
