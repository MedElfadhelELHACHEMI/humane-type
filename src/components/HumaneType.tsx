import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import './HumaneType.css';
import { HumaneTypeProps } from '../types';

// Default values from original InDesign plugin
const DEFAULT_BODY_OPTIONS = {
  curveIntensity: 15,   // Line curve intensity
  horizontalVariation: 5, // Random horizontal variation
  verticalVariation: 3,  // Random vertical variation
};

const DEFAULT_TITLE_OPTIONS = {
  rotationVariation: 3,  // Character rotation variation
  baselineVariation: 1,  // Baseline shift variation
  trackingVariation: 100, // Tracking (letter-spacing) variation
  sizeVariation: 0,      // Font size variation
};

/**
 * Applies humanizing text effects to children
 * 
 * @param props Component props
 * @returns React component
 */
const HumaneType = ({
  children,
  bodyOptions = {},
  titleOptions = {},
  mode = 'body',
  as = 'div',
  className = '',
  ...restProps
}: HumaneTypeProps) => {
  const textRef = useRef<HTMLElement>(null);

  // Merge defaults with provided options
  const mergedBodyOptions = useMemo(() => ({
    ...DEFAULT_BODY_OPTIONS,
    ...bodyOptions
  }), [bodyOptions]);
  
  const mergedTitleOptions = useMemo(() => ({
    ...DEFAULT_TITLE_OPTIONS,
    ...titleOptions
  }), [titleOptions]);

  // Random number within range
  const rand = useCallback((min: number, max: number) => Math.random() * (max - min) + min, []);

  // Apply title effect (character by character modifications)
  const applyTitleEffect = useCallback((element: HTMLElement, options: typeof mergedTitleOptions) => {
    const text = element.textContent || '';
    element.textContent = '';

    // Process each character
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const span = document.createElement('span');
      span.textContent = char;
      
      // Apply random variations
      const rotation = rand(-options.rotationVariation, options.rotationVariation);
      const baselineShift = rand(-options.baselineVariation, options.baselineVariation);
      const tracking = rand(0, options.trackingVariation / 100);
      const sizeAdjust = rand(0, options.sizeVariation) / 100;
      
      // Apply styles
      span.style.display = 'inline-block';
      span.style.transform = `rotate(${rotation}deg)`;
      span.style.position = 'relative';
      span.style.top = `${baselineShift}px`;
      span.style.marginRight = `${tracking}em`;
      
      if (options.sizeVariation > 0) {
        span.style.fontSize = `${100 + sizeAdjust}%`;
      }
      
      element.appendChild(span);
    }
  }, [rand]);

  // Apply body effect (path-based text with curves)
  const applyBodyEffect = useCallback((element: HTMLElement, options: typeof mergedBodyOptions) => {
    // Get text content
    const text = element.textContent || '';
    element.innerHTML = '';
    
    // Split text by lines or create a single line
    const lines = text.split('\n');
    
    // Create a container for all lines
    const container = document.createElement('div');
    container.className = 'humane-container';
    
    // Process each line
    lines.forEach((line, index) => {
      if (line.trim() === '') {
        container.appendChild(document.createElement('br'));
        return;
      }
      
      // Create line container
      const lineContainer = document.createElement('div');
      lineContainer.className = 'humane-line';
      lineContainer.style.position = 'relative';
      lineContainer.style.minHeight = '2em';
      lineContainer.style.marginBottom = '0.5em';
      
      // Create SVG for the curved text
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '50');
      svg.style.position = 'absolute';
      svg.style.top = '0';
      svg.style.left = '0';
      svg.style.width = '100%';
      svg.style.height = '100%';
      svg.style.overflow = 'visible';
      
      // Calculate random variations for this line
      const horizontalOffset = rand(-options.horizontalVariation, options.horizontalVariation);
      const verticalOffset = rand(-2, options.verticalVariation);
      
      // Create path for text to follow
      const pathId = `path-${index}-${Math.floor(Math.random() * 10000)}`;
      const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('id', pathId);
      path.setAttribute('fill', 'none');
      
      // Calculate control points for curve
      const startX = horizontalOffset;
      const startY = 20 + verticalOffset;
      const endX = 1000; // Large value to ensure it extends across container
      const endY = 20 + rand(0, options.curveIntensity) + verticalOffset;
      const controlX = 500; // Midpoint for curve control
      const controlY = 20 + rand(-5, 5) + verticalOffset;
      
      // Set path data
      path.setAttribute('d', `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY}`);
      
      // Add path to SVG
      svg.appendChild(path);
      
      // Create text element that follows the path
      const svgText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      svgText.style.fill = 'currentColor';
      svgText.style.fontSize = 'inherit';
      svgText.style.fontFamily = 'inherit';
      svgText.style.dominantBaseline = 'middle';
      
      // Create textPath element
      const textPath = document.createElementNS('http://www.w3.org/2000/svg', 'textPath');
      textPath.setAttribute('href', `#${pathId}`);
      textPath.setAttribute('startOffset', '0');
      textPath.textContent = line;
      
      // Add textPath to text element
      svgText.appendChild(textPath);
      
      // Add text to SVG
      svg.appendChild(svgText);
      
      // Add SVG to line container
      lineContainer.appendChild(svg);
      
      // Add invisible text for accessibility and selection
      const hiddenText = document.createElement('span');
      hiddenText.textContent = line;
      hiddenText.className = 'humane-hidden-text';
      hiddenText.style.visibility = 'hidden';
      hiddenText.style.position = 'absolute';
      hiddenText.style.pointerEvents = 'none';
      lineContainer.appendChild(hiddenText);
      
      // Add line to container
      container.appendChild(lineContainer);
    });
    
    // Add container to element
    element.appendChild(container);
  }, [rand]);

  // Function to apply humanized styling to the text
  useEffect(() => {
    if (!textRef.current) return;
    
    const element = textRef.current;
    
    // Clear previous content
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
    
    // Create a text node with the children content
    const textNode = document.createTextNode(children as string);
    element.appendChild(textNode);
    
    if (mode === 'title') {
      applyTitleEffect(element, mergedTitleOptions);
    } else {
      applyBodyEffect(element, mergedBodyOptions);
    }
  }, [children, mode, mergedBodyOptions, mergedTitleOptions, applyTitleEffect, applyBodyEffect]);

  // Create the component with the specified HTML element
  const Component = as as React.ElementType;
  
  return (
    <Component 
      ref={textRef} 
      className={`humane-type ${mode} ${className}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export default HumaneType;
