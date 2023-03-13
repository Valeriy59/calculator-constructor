import React from 'react';
import s from'./App.module.css';
import {Sidebar} from "./features/sidebar/Sidebar";
import {Canvas} from "./features/canvas/Canvas";
import {SwitchMode} from "./components/SwitchMode/SwitchMode";

function App() {
  return (
    <div className={s.app}>
      <SwitchMode/>
      <Sidebar/>
      <Canvas/>
    </div>
  );
}

export default App;
