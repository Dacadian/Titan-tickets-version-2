'use client'
import Link from 'next/link'
import { LayoutDashboard, Calendar, BarChart3, Settings, Ticket, Users } from 'lucide-react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/events', label: 'Events', icon: Calendar },
  { href: '/admin/analytics', label: 'Analytics', icon: BarChart3 },
  { href: '/admin/tickets', label: 'Tickets', icon: Ticket },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
]

export default function Sidebar() {
  return (
    <div className="w-64 glass-effect h-screen p-6 fixed lg:static z-40">
      <div className="mb-12">
        <h2 className="text-2xl font-black gradient-text">Titan Admin</h2>
        <p className="text-gray-500 mt-2">Event Management</p>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href}
            className="flex items-center space-x-3 p-4 rounded-2xl hover:bg-gray-800/50 hover:text-orange-400 transition-all group"
          >
            <item.icon className="w-6 h-6" />
            <span className="font-semibold">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}
