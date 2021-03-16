import cuid from 'cuid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Button, FormField } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent, createEvent } from '../eventActions';
import { Formik, Form, Field } from 'formik';

export default function EventForm({ match, history }) {
  const dispatch = useDispatch();
  const {params: {id}} = match;
  const selectedEvent = useSelector(state => state.event.events.find(e => e.id === id));

  const initialValue = selectedEvent ?? {
    title: '',
    category: '',
    description: '',
    city: '',
    venue: '',
    date: '',
  }

  const [values, setValues] = useState(initialValue)

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })
  }

  const handleSubmitForm = () => {
    selectedEvent
    ? dispatch(updateEvent({...selectedEvent, ...values}))
    : dispatch(createEvent({
      ...values,
      id: cuid,
      hostedBy: 'Bob',
      attendees: [],
      hostPhotoURL: '/assets/user.png' }));
      history.push('/events')
  }

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Formik
        initialValues={initialValue}
        onSubmit={(values)=> {console.log(values)}}
      >
          <Form className='ui form'>
            <FormField>
              <Field 
                placeholder='Event title'
                name='title' />
            </FormField>
            <FormField>
              <Field 
                placeholder='Category'
                name='category' />
            </FormField>
            <FormField>
              <Field 
                placeholder='Description'
                name='description' />
            </FormField>
            <FormField>
              <Field 
                placeholder='City'
                name='city' />
            </FormField>
            <FormField>
              <Field 
                placeholder='Venue'
                name='venue' />
            </FormField>
            <FormField>
              <Field 
                placeholder='Event date'
                name='date'
                type='date' />
            </FormField>
            <Button type='submit' floated='right' positive content='Submit' />
            <Button
              as={Link} to='/events'
              type='submit'
              floated='right'
              content='Cancel'
            />
          </Form>
      </Formik>
    </Segment>
  );
}