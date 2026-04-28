'use client'
import { useState } from 'react'
import Sidebar from '@/components/Admin/Sidebar'
import AnalyticsCard from '@/components/Admin/AnalyticsCard'
import EventsTable from '@/components/Admin/EventsTable'
import EventForm from '@/components/Admin/EventForm'

// Mock data - no import errors
const mockEvents = [
  { id: 1, title: 'Tech Summit', price: 2500, availableTickets: 1200 },
  { id: 2, title: 'Music Fest', price: 1500, availableTickets: 3500 }
]

export default function AdminDashboard() {
  const [events] = useState(mockEvents)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="bg-gray-900 min-h-screen flex">
      <Sidebar />
      
      <main className="flex-1 p-8 ml-0 lg:ml-64">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-4">
            Titan Admin
          </h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all"
          >
            {showForm ? 'Cancel' : '+ Create Event'}
          </button>
        </header>

        {/* Create Form */}
        {showForm && (
          <section className="mb-12">
            <div className="bg-black/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8">
              <EventForm />
            </div>
          </section>
        )}

        {/* Analytics */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AnalyticsCard title="Total Events" value={events.length} icon="🎫" />
            <AnalyticsCard title="Revenue" value="KSh 2.5M" icon="💰" />
            <AnalyticsCard title="Tickets Sold" value="847" icon="🎟️" />
            <AnalyticsCard title="Users" value="2.3K" icon="👥" />
          </div>
        </section>

        {/* Events Table */}
        <section className="bg-black/50 backdrop-blur-xl border border-gray-800/50 rounded-3xl p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Events ({events.length})</h2>
          <EventsTable events={events} />
        </section>
      </main>
    </div>
  )
}
