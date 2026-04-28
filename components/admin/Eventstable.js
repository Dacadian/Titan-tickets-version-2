'use client'
import { Eye, Edit3, Trash2 } from 'lucide-react'
import Link from 'next/link'

export default function EventsTable({ events }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-800">
            <th className="text-left py-6 font-black text-white">Event</th>
            <th className="text-left py-6 font-black text-white">Date</th>
            <th className="text-left py-6 font-black text-white">Price</th>
            <th className="text-right py-6 font-black text-white">Tickets</th>
            <th className="text-right py-6 font-black text-white">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {events.map((event) => (
            <tr key={event.id} className="hover:bg-gray-800/50 transition-colors">
              <td className="py-6 pr-0">
                <div className="flex items-center space-x-4">
                  <img src={event.image} alt={event.title} className="w-16 h-16 rounded-2xl object-cover" />
                  <div>
                    <h4 className="font-bold text-white">{event.title}</h4>
                    <p className="text-gray-500 text-sm">{event.location}</p>
                  </div>
                </div>
              </td>
              <td className="py-6 text-gray-400">{new Date(event.date).toLocaleDateString()}</td>
              <td className="py-6">
                <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-bold rounded-xl">
                  KSh {event.price}
                </span>
              </td>
              <td className="py-6 text-right font-bold text-orange-400">{event.availableTickets}</td>
              <td className="py-6 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <Link href={`/event/${event.id}`} className="p-2 hover:bg-gray-700 rounded-xl">
                    <Eye className="w-5 h-5 text-gray-400 hover:text-white" />
                  </Link>
                  <button className="p-2 hover:bg-gray-700 rounded-xl">
                    <Edit3 className="w-5 h-5 text-gray-400 hover:text-orange-400" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-xl">
                    <Trash2 className="w-5 h-5 text-gray-400 hover:text-red-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
