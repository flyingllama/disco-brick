import React, { useState } from 'react';
import { debounce } from 'lodash';
import { RgbColorPicker } from 'react-colorful';
import 'react-colorful/dist/index.css';

import { Bt } from './utils/bt';
import { ColoredBt, Presets } from './utils/coloredBt';

import { BluetoothButton } from './components/bluetoothButton.component';
import { SequenceList } from './components/sequenceList.component';

import './App.css';

// window.Bt = Bt;
// window.Presets = Presets;
// window.ColoredBt = ColoredBt;

const App = () => {
  const [color, setColor] = useState('#ffffff');
  const [connected, setConnected] = useState(false);

  const connectHandler = () => {
    Bt.connect().then(strip => {
      ColoredBt.sayHello(strip);
      setConnected(true);
    });
  };

  const disconnectHandler = () => {
    Bt.disconnectAll();
    setConnected(false);
  };

  const colorChangeHandler = debounce(selectedColor => {
    setColor(selectedColor);
    ColoredBt.sendColor(selectedColor);
  }, 30);

  const presetClickHandler = preset => {
    ColoredBt.sendPreset(preset, 1);
  };

  return (
    <div className="App">
      <BluetoothButton small clickHandler={connectHandler} />
      <SequenceList />
      {connected && (
        <>
          <button onClick={() => ColoredBt.turnOn()}>ON</button>
          <button onClick={() => ColoredBt.turnOff()}>OFF</button>
          <RgbColorPicker color={color} onChange={colorChangeHandler} />
          <button onClick={disconnectHandler}>Disconnect All</button>
          <ul>
            {Object.keys(Presets).map(preset => (
              <li key={preset}>
                <button onClick={() => presetClickHandler(Presets[preset])}>{preset}</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export { App };
