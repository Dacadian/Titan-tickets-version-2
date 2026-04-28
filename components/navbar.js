'use client'
import Link from 'next/link'
import { Menu, Ticket } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="glass-effect fixed top-0 w-full z-50 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3">
          <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl">
            <Ticket className="w-7 h-7 text-black" />
          </div>
          <span className="text-2xl font-black gradient-text">Titan Tickets</span>
        </Link>
        <div className="hidden lg:flex space-x-8">
          <Link href="/" className="text-lg font-semibold text-gray-300 hover:text-white">Events</Link>
          <Link href="/admin" className="text-lg font-semibold text-gray-300 hover:text-white">Admin</Link>
        </div>
        <button onClick={() => setOpen(true)} className="lg:hidden p-2 rounded-xl hover:bg-gray-800">
          <Menu className="w-7 h-7" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden glass-effect mt-4 p-6 rounded-2xl mx-6">
          <Link href="/" className="block py-3 px-4 rounded-xl hover:bg-gray-800">Events</Link>
          <Link href="/admin" className="block py-3 px-4 rounded-xl hover:bg-gray-800">Admin</Link>
        </div>
      )}
    </nav>
  )
}
