import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({events, deleteEvent}) => {
    return (
        <>
        {events.map( (event) => {
            return <EventListItem event={event} key={event.id}/>
        })}
        </>
    )
}

export default EventList;