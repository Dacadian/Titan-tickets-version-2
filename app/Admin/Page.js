'use client'
import { useState } from 'react'
import Sidebar from '@/components/Admin/Sidebar'
import AnalyticsCard from '@/components/Admin/AnalyticsCard'
import EventsTable from '@/components/Admin/EventsTable'
import EventForm from '@/components/Admin/EventForm'
import { getEvents } from '@/lib/db'

export default function AdminDashboard() {
  const [events, setEvents] = useState(getEvents())
  const [showForm, setShowForm] = useState(false)

  const handleEventCreated = (newEvent) => {
    setEvents([newEvent, ...events])
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex">
      <Sidebar />
      <main className="flex-1 p-8 lg:p-12 ml-0 lg:ml-64 overflow-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-black gradient-text mb-4">Titan Admin</h1>
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-primary px-8 py-4 text-lg font-black"
          >
            {showForm ? 'Cancel' : '+ New Event'}
          </button>
        </header>

        {showForm && (
          <section className="mb-12">
            <EventForm onSuccess={handleEventCreated} />
          </section>
        )}

        <section className="glass-effect rounded-3xl p-8">
          <h2 className="text-3xl font-black text-white mb-8">Events ({events.length})</h2>
          <EventsTable events={events} />
        </section>
      </main>
    </div>
  )
}
