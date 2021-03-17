import React, { useState } from "react";
import { Button } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./testReducer";
import { openModal } from "../app/common/modals/modalReducer";
import TestPlaceInput from "./TestPlaceInput";
import TestMap from './TestMap';

const Sandbox = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.test.data);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  const [location, setLocation] = useState(defaultProps);

  const handleSetLocation = (latLng) => {
    setLocation({...location, center: {lat: latLng.lat, lng: latLng.lng}})
  }
  return (
    <>
      <h1>Sandbox</h1>
      <h3>data is {data}</h3>
      <Button
        onClick={() => dispatch(increment(10))}
        content='Increment'
        color='green'
      />
      <Button
        onClick={() => dispatch(decrement(20))}
        content='Decrement'
        color='red'
      />
      <Button
        onClick={() =>
          dispatch(openModal({ modalType: "TestModal", modalProps: data }))
        }
        content='Open Modal'
        color='teal'
      />

      <div style={{marginTop: 15}}>
      <TestPlaceInput setLocation={handleSetLocation} />
      <TestMap location={location} />
      </div>
    </>
  );
};

export default Sandbox;
