import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from '../src';

const Example = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Humane Library Example</h1>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="text">Text Button</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(<Example />);
