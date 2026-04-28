import { updateTicketStatus } from '@/lib/db'

export async function POST(request) {
  try {
    const body = await request.json()
    console.log('M-Pesa Callback:', body)
    
    if (body.Body?.stkCallback?.ResultCode === 0) {
      // Payment successful - update ticket
      const tickets = require('@/lib/db').tickets
      const latestTicket = tickets[tickets.length - 1]
      if (latestTicket) updateTicketStatus(latestTicket.id, 'paid')
    }
    
    return Response.json({ resultCode: 1, resultDesc: 'Accepted' })
  } catch (error) {
    return Response.json({ resultCode: 1, resultDesc: 'Accepted' })
  }
}
