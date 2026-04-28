'use client'
import { useState } from 'react'
import { Calendar, MapPin, DollarSign, Users, Image as ImageIcon } from 'lucide-react'

// Direct import - no errors
const { createEvent } = await import('@/lib/db')

export default function EventForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16), // Tomorrow
    location: '',
    price: 2500,
    availableTickets: 1000,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      // Import dynamically to avoid SSR issues
      const { createEvent } = await import('@/lib/db')
      const newEvent = createEvent(formData)
      
      // Reset form
      setFormData({
        title: '',
        description: '',
        date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16),
        location: '',
        price: 2500,
        availableTickets: 1000,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop'
      })
      
      // Success callback
      if (onSuccess) onSuccess(newEvent)
      
      alert(`✅ "${newEvent.title}" created successfully!`)
    } catch (error) {
      console.error('Create event error:', error)
      alert('❌ Failed to create event')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-effect rounded-3xl p-8 lg:p-10 space-y-6 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-black gradient-text">Create New Event</h2>
        <p className="text-gray-400 mt-2">Fill details to launch your event</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Title */}
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold text-sm">
            <ImageIcon className="w-5 h-5 mr-2 text-orange-400" />
            Event Title
          </label>
          <input
            type="text"
            required
            className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            placeholder="e.g. Titan Tech Summit 2024"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
        
        {/* Price */}
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold text-sm">
            <DollarSign className="w-5 h-5 mr-2 text-orange-400" />
            Ticket Price (KSh)
          </label>
          <input
            type="number"
            min="0"
            required
            className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            placeholder="2500"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: parseInt(e.target.value) || 0})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Date */}
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold text-sm">
            <Calendar className="w-5 h-5 mr-2 text-orange-400" />
            Date & Time
          </label>
          <input
            type="datetime-local"
            required
            className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            value={formData.date}
            onChange={(e) => setFormData({...formData, date: e.target.value})}
          />
        </div>
        
        {/* Tickets */}
        <div>
          <label className="flex items-center text-gray-300 mb-3 font-bold text-sm">
            <Users className="w-5 h-5 mr-2 text-orange-400" />
            Available Tickets
          </label>
          <input
            type="number"
            min="1"
            required
            className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
            placeholder="1000"
            value={formData.availableTickets}
            onChange={(e) => setFormData({...formData, availableTickets: parseInt(e.target.value) || 0})}
          />
        </div>
      </div>

      {/* Location */}
      <div>
        <label className="flex items-center text-gray-300 mb-3 font-bold text-sm">
          <MapPin className="w-5 h-5 mr-2 text-orange-400" />
          Location
        </label>
        <input
          type="text"
          required
          className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all"
          placeholder="e.g. KICC - Nairobi"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-gray-300 mb-3 font-bold text-sm">Description</label>
        <textarea
          rows="3"
          required
          className="w-full p-4 bg-gray-900/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 outline-none transition-all resize-vertical"
          placeholder="Why should people attend your event?..."
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      {/* Submit */}
      <button 
        type="submit" 
        disabled={loading}
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-black font-black py-6 px-8 rounded-2xl text-xl shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 disabled:transform-none transition-all duration-300 flex items-center justify-center space-x-3"
      >
        {loading ? (
          <>
            <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
            <span>Creating...</span>
          </>
        ) : (
          <>
            <span>🚀 Launch Event</span>
          </>
        )}
      </button>
    </form>
  )
}
