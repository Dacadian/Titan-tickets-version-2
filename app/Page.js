import EventCard from '@/components/EventCard'
import { getEvents } from '@/lib/db'

export default function Home() {
  const events = getEvents()
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent mb-6">
            Titan Tickets
          </h1>
          <p className="text-2xl text-gray-400 max-w-2xl mx-auto">
            Secure events. Lightning payments.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map(event => <EventCard key={event.id} event={event} />)}
        </div>
      </div>
    </div>
  )
}
