import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Item, Segment, Icon, Button, List } from 'semantic-ui-react';
import { deleteEvent } from '../eventActions';
import EventListAttendee from './EventListAttendee';
import { format } from 'date-fns';

const EventListItem = ({event}) => {
    const dispatch = useDispatch();
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={event.hostPhotoURL}/>
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(event.date, 'MMMM d, yyyy h:mm a')}
                    <Icon name='marker' /> {event.venue.address}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map((attendee) => {
                        return <EventListAttendee attendee={attendee} key={attendee.id} />
                    })}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button
                    as={Link} to={`/events/${event.id}`}
                    color='teal'
                    floated='right'
                    content='View' />
                <Button
                    onClick={() => {dispatch(deleteEvent((event.id)))}}
                    color='red'
                    floated='right'
                    content='Delete' />
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem;