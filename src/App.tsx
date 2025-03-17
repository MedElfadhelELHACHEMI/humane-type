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
    rotationVariation: 3,
    baselineVariation: 1,
    trackingVariation: 100,
    sizeVariation: 0,
  })

  // State for copy notification
  const [copyNotification, setCopyNotification] = useState({
    visible: false,
    type: ''
  });

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

  // Copy current options to clipboard
  const copyToClipboard = (type: 'title' | 'body') => {
    const options = type === 'title' ? titleOptions : bodyOptions;
    
    // Create a code snippet for the options
    const codeSnippet = `${type === 'title' ? 'titleOptions' : 'bodyOptions'}: ${JSON.stringify(options, null, 2)}`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        // Show notification
        setCopyNotification({
          visible: true,
          type
        });
        
        // Hide notification after 2 seconds
        setTimeout(() => {
          setCopyNotification({
            visible: false,
            type: ''
          });
        }, 2000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
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
          
          <button 
            className="copy-button"
            onClick={() => copyToClipboard('title')}
          >
            Copy Title Options
          </button>
          
          {copyNotification.visible && copyNotification.type === 'title' && (
            <div className="copy-notification">Copied to clipboard!</div>
          )}
        </div>
        
        <div className="preview">
          <HumaneTitle options={titleOptions} as="h3">
            This is a title with humanizing effects applied to it
          </HumaneTitle>
          
          <HumaneTitle options={titleOptions} as="h4">
            Title with a line break
            {'\n'}
            showing the newline support
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
          
          <button 
            className="copy-button"
            onClick={() => copyToClipboard('body')}
          >
            Copy Body Options
          </button>
          
          {copyNotification.visible && copyNotification.type === 'body' && (
            <div className="copy-notification">Copied to clipboard!</div>
          )}
        </div>
        
        <div className="preview" style={{color:'black'}}>
          <HumaneBody options={bodyOptions}>
            This is a paragraph with humanizing effects applied to make the text look more natural and hand-written.
            The text follows a curved path with small variations to create an organic feeling.
          </HumaneBody>
          
          <HumaneBody options={bodyOptions}>
            This is the first paragraph with a humanizing effect.
            {'\n'}{'\n'}
            This is a second paragraph separated by a double newline. The paragraphs are properly separated with appropriate spacing.
            {'\n'}{'\n'}
            This third paragraph demonstrates how multiple paragraphs are handled, each with its own unique curve.
          </HumaneBody>
          
          <HumaneBody options={bodyOptions}>
            This paragraph has a line break within it.
            {'\n'}
            This continues on a new line but within the same paragraph.
            {'\n'}
            Each line gets its own curve while maintaining paragraph continuity.
          </HumaneBody>
        </div>
      </div>
    </div>
  )
}

export default App
