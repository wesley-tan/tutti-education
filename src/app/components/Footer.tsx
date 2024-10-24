import { Globe } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-purple-800 text-white">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Globe className="mr-2" />
          <p>Serving IB students worldwide</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/contact" className="hover:text-purple-200">Contact Us</Link></li>
          </ul>
        </nav>
        <p className="mt-4 md:mt-0">&copy; {new Date().getFullYear()} Tutti Education. All rights reserved.</p>
      </div>
    </footer>
  )
}
