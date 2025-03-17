import { useState } from 'react'
import './App.css'
import HumaneTitle from './components/HumaneTitle'
import HumaneBody from './components/HumaneBody'

function App() {
  // State for body text options
  const [bodyOptions, setBodyOptions] = useState({
    curveIntensity: 15,
    horizontalVariation: 5,
    verticalVariation: 3,
  })

  // State for title text options
  const [titleOptions, setTitleOptions] = useState({
    rotationVariation: 1,
    baselineVariation: 1,
    trackingVariation: 20,
    sizeVariation: 5,
  })

  // Handler for updating body options
  const handleBodyOptionChange = (option: keyof typeof bodyOptions, value: number) => {
    setBodyOptions(prev => ({
      ...prev,
      [option]: value
    }))
  }

  // Handler for updating title options
  const handleTitleOptionChange = (option: keyof typeof titleOptions, value: number) => {
    setTitleOptions(prev => ({
      ...prev,
      [option]: value
    }))
  }

  return (
    <div className="app-container">
      <h1>Humane Type Demo</h1>
      
      <div className="demo-section">
        <h2>Title Text Effects</h2>
        
        <div className="controls">
          <div className="control-group">
            <label>
              Rotation Variation: {titleOptions.rotationVariation}
              <input 
                type="range" 
                min="0" 
                max="15" 
                value={titleOptions.rotationVariation} 
                onChange={(e) => handleTitleOptionChange('rotationVariation', Number(e.target.value))}
              />
            </label>
          </div>
          
          <div className="control-group">
            <label>
              Baseline Variation: {titleOptions.baselineVariation}
              <input 
                type="range" 
                min="0" 
                max="5" 
                value={titleOptions.baselineVariation} 
                onChange={(e) => handleTitleOptionChange('baselineVariation', Number(e.target.value))}
              />
            </label>
          </div>
          
          <div className="control-group">
            <label>
              Tracking Variation: {titleOptions.trackingVariation}
              <input 
                type="range" 
                min="0" 
                max="300" 
                value={titleOptions.trackingVariation} 
                onChange={(e) => handleTitleOptionChange('trackingVariation', Number(e.target.value))}
              />
            </label>
          </div>
          
          <div className="control-group">
            <label>
              Size Variation: {titleOptions.sizeVariation}
              <input 
                type="range" 
                min="0" 
                max="300" 
                value={titleOptions.sizeVariation} 
                onChange={(e) => handleTitleOptionChange('sizeVariation', Number(e.target.value))}
              />
            </label>
          </div>
        </div>
        
        <div className="preview">
          <HumaneTitle options={titleOptions} as="h3">
            This is a title with humanizing effects applied to it
          </HumaneTitle>
          
          <HumaneTitle options={titleOptions} as="h4">
            Another example with a different heading level
          </HumaneTitle>
        </div>
      </div>
      
      <div className="demo-section">
        <h2>Body Text Effects</h2>
        
        <div className="controls">
          <div className="control-group">
            <label>
              Curve Intensity: {bodyOptions.curveIntensity}
              <input 
                type="range" 
                min="0" 
                max="45" 
                value={bodyOptions.curveIntensity} 
                onChange={(e) => handleBodyOptionChange('curveIntensity', Number(e.target.value))}
              />
            </label>
          </div>
          
          <div className="control-group">
            <label>
              Horizontal Variation: {bodyOptions.horizontalVariation}
              <input 
                type="range" 
                min="0" 
                max="45" 
                value={bodyOptions.horizontalVariation} 
                onChange={(e) => handleBodyOptionChange('horizontalVariation', Number(e.target.value))}
              />
            </label>
          </div>
          
          <div className="control-group">
            <label>
              Vertical Variation: {bodyOptions.verticalVariation}
              <input 
                type="range" 
                min="0" 
                max="30" 
                value={bodyOptions.verticalVariation} 
                onChange={(e) => handleBodyOptionChange('verticalVariation', Number(e.target.value))}
              />
            </label>
          </div>
        </div>
        
        <div className="preview">
          <HumaneBody options={bodyOptions}>
            This is a paragraph with humanizing effects applied to make the text look more natural and hand-written.
            The text follows a curved path with small variations to create an organic feeling.
          </HumaneBody>
          
          <HumaneBody options={bodyOptions}>
            A second paragraph to demonstrate how multiple blocks of text appear with the humanizing effects.
            Each paragraph gets its own unique curve and variations while maintaining readability.
          </HumaneBody>
        </div>
      </div>
    </div>
  )
}

export default App
