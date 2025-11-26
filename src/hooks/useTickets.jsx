import { useEffect, useState } from 'react';

export function useTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('support.tickets');
    if (stored) {
      setTickets(JSON.parse(stored));
    }
  }, []);

  const saveTickets = (newTickets) => {
    setTickets(newTickets);
    localStorage.setItem('support.tickets', JSON.stringify(newTickets));
  };

  const addTicket = (ticket) => {
    const newTicket = {
      id: Date.now(),
      title: ticket.title,
      steps: ticket.steps,
      severity: ticket.severity,
      status: 'Open',
      createdAt: new Date().toISOString()
    };
    saveTickets([newTicket, ...(tickets || [])]);
  };

  const resolveTicket = (id) => {
    const updated = tickets.map(t =>
      t.id === id ? { ...t, status: 'Resolved' } : t
    );
    saveTickets(updated);
  };

  return { tickets, addTicket, resolveTicket };
}
