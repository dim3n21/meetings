import cuid from 'cuid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Button,} from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { updateEvent, createEvent } from '../eventActions';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../app/common/form/MyTextInput';
import MyTextArea from '../../../app/common/form/MyTextArea';

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
    attendees: [],
  }

  const validationSchema = Yup.object({
    title: Yup.string().required('You must provide a title'),
    category: Yup.string().required('You must provide a category'),
    description: Yup.string().required(),
    city: Yup.string().required(),
    venue: Yup.string().required(),
    date: Yup.string().required(),
  });

  return (
    <Segment clearing>
      <Header content={selectedEvent ? 'Edit the event' : 'Create new event'} />
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={(values)=> {
          selectedEvent
          ? dispatch(updateEvent({...selectedEvent, ...values}))
          : dispatch(createEvent({
            ...values,
            id: cuid(),
            hostedBy: 'Bob',
            attendees: [],
            hostPhotoURL: '/assets/user.png' }));
            history.push('/events')
        }}
      >
          <Form className='ui form'>
            <Header sub color='teal' content='Event Details' />
            <MyTextInput
              name='title'
              placeholder='Event title' />
            <MyTextInput 
              placeholder='Category'
              name='category' />
            <MyTextArea 
              placeholder='Description'
              name='description'
              rows={3}  />
            <Header sub color='teal' content='Event Location Details' />
            <MyTextInput 
              placeholder='City'
              name='city' />
            <MyTextInput 
              placeholder='Venue'
              name='venue' />
            <MyTextInput 
              placeholder='Event date'
              name='date'
              type='date' />
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