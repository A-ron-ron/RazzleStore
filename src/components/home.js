import React, { useContext } from 'react';
import { Context } from '../context';

export default function Home() {

  const {Hello} = useContext(Context)

    return (
      <div>
        <p> {Hello} Context Trial </p>
      </div>
    );
  }
