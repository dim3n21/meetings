import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({formOpen, setFormOpen, selectedEvent, selectEvent}) => {
    const [events, setEvents] = useState(sampleData);
    

    const handleCreateEvent = (event) => {
        setEvents([...events, event]);
    }

    const handleUpdateEvent = (updatedEvent) => {
        setEvents(events.map(evt => evt.id === updatedEvent.id ? updatedEvent : evt));
        selectEvent(null);
    }

    const handleDeleteEvent = (eventId) => {
        setEvents(events.filter( event => event.id !== eventId));
    }
    
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={events} selectEvent={selectEvent} deleteEvent={handleDeleteEvent} />
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && (
                <EventForm
                    setFormOpen={setFormOpen}
                    setEvents={setEvents}
                    createEvent={handleCreateEvent}
                    selectedEvent={selectedEvent}
                    updateEvent={handleUpdateEvent}
                    key={selectedEvent ? selectedEvent.id : null} 
                />
                )}
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard;