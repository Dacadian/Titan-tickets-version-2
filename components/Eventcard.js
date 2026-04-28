'use client'
import Link from 'next/link'
import { Calendar, MapPin, DollarSign } from 'lucide-react'

export default function EventCard({ event }) {
  return (
    <Link href={`/event/${event.id}`} className="card-hover block">
      <div className="glass-effect rounded-3xl p-8 h-full">
        <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
        <h3 className="text-3xl font-black text-white mb-4">{event.title}</h3>
        <p className="text-gray-400 mb-6">{event.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-gray-400">
            <Calendar className="w-5 h-5" />{new Date(event.date).toLocaleDateString()}
            <MapPin className="w-5 h-5" />{event.location}
          </div>
          <div className="text-2xl font-black gradient-text">
            KSh {event.price.toLocaleString()}
          </div>
        </div>
      </div>
    </Link>
  )
}
