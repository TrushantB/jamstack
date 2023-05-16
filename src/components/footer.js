
import Link from 'next/link'
export default function Footer() {
    return (
        <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href="/" className="flex items-center mb-4 sm:mb-0">
                        <img src="/J.svg" className="h-8 mr-3" alt="Jamstack Plus Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Jamstack+</span>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About Jamstack</Link>
                        </li>

                        <li>
                            <Link href="/contact" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://jamstack.plus/" className="hover:underline">Jamstack™</a>. All Rights Reserved.</span>
            </div>
        </footer>



    )
}