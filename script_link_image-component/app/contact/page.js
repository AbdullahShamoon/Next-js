import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <div>
      Contact page
      <Image src={"https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80"} width={900} height={900} alt='Image' />
    </div>
  )
}

export default contact
export const metadata = {
  title: "Next.js - Contact page",
  description: "Contact page of our app",
};
