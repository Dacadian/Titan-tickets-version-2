let events = [
  {
    id: 1,
    title: "Titan Tech Summit 2024",
    description: "Join Africa's premier tech conference with 50+ speakers and 5000+ attendees",
    date: "2024-12-15T10:00:00Z",
    location: "KICC - Nairobi",
    price: 3500,
    availableTickets: 1200,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop",
    organizer: "Titan Tech Hub"
  },
  {
    id: 2,
    title: "AfroVibe Music Festival",
    description: "3 days of non-stop music with top African artists and international DJs",
    date: "2024-12-20T16:00:00Z",
    location: "Nairobi National Park Grounds",
    price: 2500,
    availableTickets: 3500,
    image: "https://images.unsplash.com/photo-1461896836934-ffe60778fe84?w=800&h=400&fit=crop",
    organizer: "Titan Entertainment"
  }
];

let tickets = [];

export function getEvents() { return events; }
export function getEventById(id) { return events.find(e => e.id === parseInt(id)); }
export function createEvent(eventData) {
  const newEvent = { ...eventData, id: Date.now() };
  events.unshift(newEvent);
  return newEvent;
}
export function updateEvent(id, data) {
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events[index] = { ...events[index], ...data };
    return events[index];
  }
  return null;
}
export function deleteEvent(id) {
  const index = events.findIndex(e => e.id === id);
  if (index !== -1) {
    events.splice(index, 1);
    return true;
  }
  return false;
}
export function purchaseTicket(ticketData) {
  const ticket = { id: Date.now(), ...ticketData, status: 'pending', createdAt: new Date().toISOString() };
  tickets.push(ticket);
  return ticket;
}
export function getTicketsByEventId(eventId) { return tickets.filter(t => t.eventId === parseInt(eventId)); }
export function updateTicketStatus(ticketId, status) {
  const ticket = tickets.find(t => t.id === ticketId);
  if (ticket) ticket.status = status;
  return ticket;
}
