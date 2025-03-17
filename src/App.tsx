import './App.css'
import { Button } from './components/Button'

function App() {
  return (
    <div className="app-container">
      <h1>Humane React Component Library</h1>
      
      <section className="demo-section">
        <h2>Button Component</h2>
        
        <div className="component-demo">
          <h3>Variants</h3>
          <div className="button-row">
            <Button variant="primary">Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
            <Button variant="text">Text Button</Button>
          </div>
          
          <h3>Sizes</h3>
          <div className="button-row">
            <Button size="small">Small Button</Button>
            <Button size="medium">Medium Button</Button>
            <Button size="large">Large Button</Button>
          </div>
          
          <h3>Disabled State</h3>
          <div className="button-row">
            <Button disabled>Disabled Button</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
