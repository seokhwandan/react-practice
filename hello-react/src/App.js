import React, { useState } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import IterationSample from './IterationSample';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import SassComponent from './SassComponent';

const App = () => {
  const name = 'react';
  const [visible, setVisible] = useState(false);
  return (
    <div className="App">
      {name === 'react' ? <h1>hi react</h1> : <h1>bye react</h1>}{' '}
      {/* 참이면 hi 거짓이면 bye */}
      {name === 'react' && (
        <h1
          style={{
            // 참일때만 출력
            backgroundColor: 'yellow',
          }}
        >
          hi react
        </h1>
      )}
      <h1 className="name">{name}</h1>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && (
        <div>
          <MyComponent name="React" favoriteNumber={1} />
          <MyComponent>리액트</MyComponent>
          <Say />
          <EventPractice />
          <ValidationSample />
          <IterationSample />
          <Counter />
          <Info />
          <Average />
          <SassComponent />
        </div>
      )}
    </div>
  );
};

export default App;
