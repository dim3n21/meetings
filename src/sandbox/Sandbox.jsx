import React from 'react';
import { Button } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './testReducer';
import { openModal } from '../app/common/modals/modalReducer';

const Sandbox = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test.data);
    return (
    <>
        <h1>Sandbox</h1>
        <h3>data is {data}</h3>
        <Button onClick={() => dispatch(increment(10))} content='Increment' color='green' />
        <Button onClick={() => dispatch(decrement(20))} content='Decrement' color='red' />
        <Button onClick={() => dispatch(openModal({modalType: 'TestModal', modalProps: data}))} content='Open Modal' color='teal' />

    </>
    )
}

export default Sandbox;