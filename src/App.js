import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import RenderMFE from './util';


function App() {
  const [state, setState] = useState(false);

  const onclickHandler = () => {
    setState(!state);
  }

  return (
    <>
      <Button onClick={onclickHandler}>click</Button>
      {
        state && <RenderMFE name="employee_managemnt_ui" mainUrl="http://localhost:3002/main/main.js" />
      }
    </>
  )
}

export default App;
