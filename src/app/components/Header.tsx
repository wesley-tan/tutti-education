import Link from 'next/link'

export default function Header() {
  const navItems = ['Services', 'Team', 'Careers', 'Contact']

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <link rel="icon" href="images/favicon.ico" sizes="32x32" />
            <img src="images/favicon.ico" alt="Tutti Education Logo" className="h-10 w-10 mr-2" />
            <Link href="/" className="text-3xl font-bold text-purple-800 hover:text-purple-900 transition-colors">
              Tutti Education
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item}>
                  <Link 
                    href={`/${item.toLowerCase()}`} 
                    className="text-purple-600 hover:text-purple-800 transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
