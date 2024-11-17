import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <div className="container flex flex-col items-center justify-center h-screen">
                <div className='text-3xl font-extrabold text-red-500'>Page Not Found</div>
                <p className='font-extrabold text-9xl p-6'>404</p>
                <Link href="/" className='text-white font-extrabold bg-blue-500 rounded-full px-2 py-1'>Return Home</Link>
            </div>
        </div>
    )
}