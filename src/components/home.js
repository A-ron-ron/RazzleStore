import React, { useContext } from 'react';
import { Context } from '../context';

export default function Home() {

  const {Hello} = useContext(Context)

    return (
      <div>
        <p> {Hello} You've been routed to the Home Page </p>
      </div>
    );
  }
