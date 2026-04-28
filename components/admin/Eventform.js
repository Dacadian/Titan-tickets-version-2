'use client'
import { useState } from 'react'
import { createEvent } from '@/lib/db'
import { Calendar, MapPin, DollarSign, Image as ImageIcon } from 'lucide-react'

export default function EventForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: '',
    price: 2500,
    availableTickets: 1000,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEvent = createEvent(formData)
    if (onSuccess) onSuccess(newEvent)
    alert('✅ Event created successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-10 space-y-6 max-w-2xl mx-auto">
      <h2 className="text-4xl font-black gradient-text text-center mb-8">Create New Event</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold">
            <ImageIcon className="w-5 h-5 mr-2 text-orange-400" />
            Title
          </label>
          <input
            type="text"
            required
            className="w-full p-4 bg-transparent border border-gray-700 rounded-2xl text-white focus:border-orange-500 focus:ring-2"
            placeholder="Event Name"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
        
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold">
            <DollarSign className="w-5 h-5 mr-2 text-orange-400" />
            Price (KSh)
          </label>
          <input
            type="number"
            required
            className="w-full p-4 bg-transparent border border-gray-700 rounded-2xl text-white focus:border-orange-500 focus:ring-2"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: parseInt(e.target.value)})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold">
            <Calendar className="w-5 h-5 mr-2 text-orange-400" />
            Date & Time
          </label>
          <input
            type="datetime-local"
            required
            className="w-full p-4 bg-transparent border border-gray-700 rounded-2xl text-white focus:border-orange-500 focus:ring-2"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold">
            <MapPin className="w-5 h-5 mr-2 text-orange-400" />
            Tickets Available
          </label>
          <input
            type="number"
            required
            className="w-full p-4 bg-transparent border border-gray-700 rounded-2xl text-white focus:border-orange-500 focus:ring-2"
            value={formData.availableTickets}
            onChange={(e) => setFormData({...formData, availableTickets: parseInt(e.target.value)})}
          />
        </div>
      </div>

      <div>
        <label className="block text-gray-300 mb-3 font-bold">Location</label>
        <input
          type="text"
          required
          className="w-full p-4 bg-transparent border border-gray-700 rounded-2xl text-white focus:border-orange-500 focus:ring-2"
          placeholder="Nairobi, KICC"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-gray-300 mb-3 font-bold">Description</label>
        <textarea
          rows="4"
          required
          className="w-full p-4 bg-transparent border border-gray-700 rounded-2xl text-white focus:border-orange-500 focus:ring-2 resize-vertical"
          placeholder="Event description..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <button type="submit" className="w-full btn-primary text-xl py-6 font-black">
        🚀 Launch Event
      </button>
    </form>
  )
}
