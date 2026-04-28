'use client'
import Sidebar from '@/components/Admin/Sidebar'
import AnalyticsCard from '@/components/Admin/AnalyticsCard'
import EventsTable from '@/components/Admin/EventsTable'
import { getEvents } from '@/lib/db'
import { useState, useEffect } from 'react'

export default function Admin() {
  const [events] = useState(getEvents())
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-12 overflow-auto">
        <h1 className="text-5xl font-black gradient-text mb-12">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <AnalyticsCard title="Events" value={events.length} icon="🎫" />
          <AnalyticsCard title="Revenue" value="KSh 2.5M" icon="💰" />
          <AnalyticsCard title="Tickets" value="847" icon="🎟️" />
          <AnalyticsCard title="Users" value="2.3K" icon="👥" />
        </div>
        <div className="glass-effect rounded-3xl p-8">
          <EventsTable events={events} />
        </div>
      </main>
    </div>
  )
}
