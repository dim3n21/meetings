import React, { useState } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setFormOpen(true);
  }

  const handleCreateForm = () => {
    setSelectedEvent(null);
    setFormOpen(true);
  }
    

  return (
    <>
      <NavBar setFormOpen={handleCreateForm} />
      <Container className='main'>
        <EventDashboard
          formOpen={formOpen}
          setFormOpen={setFormOpen}
          selectedEvent={selectedEvent}
          selectEvent={handleSelectEvent} />
      </Container>
    </>
  );
}

export default App;
