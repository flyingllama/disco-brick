import { useState } from 'react';
import { debounce } from 'lodash';
import { RgbColorPicker } from 'react-colorful';
import { Bt } from './utils/bt';
import { ColoredBt, Presets } from './utils/coloredBt';
import { BluetoothButton } from './components/bluetoothbutton.component';

import 'react-colorful/dist/index.css';
import './App.css';

// window.Bt = Bt;
// window.Presets = Presets;
// window.ColoredBt = ColoredBt;

const App = () => {
  const [color, setColor] = useState("#ffffff");
  const [connected, setConnected] = useState(false);

  const connectHandler = () => {
    Bt.connect().then(strip => {
      ColoredBt.sayHello(strip);
      setConnected(true);
    });
  }

  const disconnectHandler = () => {
    Bt.disconnectAll();
    setConnected(false);
  }

  const colorChangeHandler = debounce(color => {
    setColor(color);
    ColoredBt.sendColor(color);
  }, 30);

  const presetClickHandler = preset => {
    ColoredBt.sendPreset(preset, 1);
  }

  return (
    <div className="App">
      <BluetoothButton small clickHandler={connectHandler} />
      { connected && (
        <>
          <RgbColorPicker color={color} onChange={colorChangeHandler} />
          <button onClick={disconnectHandler}>Disconnect All</button>
          <ul>
            {Object.keys(Presets).map(preset => <li key={preset}><button onClick={() => presetClickHandler(Presets[preset])}>{preset}</button></li>)}
          </ul>
        </>
      )}
    </div>
  );
}

export { App };
