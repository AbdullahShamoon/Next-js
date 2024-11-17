'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <div className="container flex flex-col items-center justify-center h-screen">
                <h2 className='text-3xl font-extrabold text-red-500 m-5'>Something went wrong!</h2>
                <button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className='text-white font-extrabold bg-blue-500 rounded-full px-2 py-1'
                >
                    Try again
                </button>
            </div>
        </div >
    )
}