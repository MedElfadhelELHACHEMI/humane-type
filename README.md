# Humane

![Poem](./Poem.png)

A React component library for adding natural, humanized variations to text. Inspired by the InDesign "Humane Type" plugin, this library allows you to create text with subtle imperfections that make it appear more hand-crafted and less mechanical.

![npm](https://img.shields.io/npm/v/humanetype)
![license](https://img.shields.io/npm/l/humanetype)

## Installation

```bash
npm install humanetype
# or
yarn add humanetype
# or
pnpm add humanetype
```

## Features

- **Title Text Effects**: Apply subtle character-by-character variations to create naturally imperfect titles
- **Body Text Effects**: Transform paragraphs by placing text on curved paths
- **Newline Support**: Properly handles paragraph breaks and line breaks within text
- **Customizable**: Control the intensity of all effects
- **Accessibility**: Maintains text selection and screen reader compatibility
- **TypeScript Support**: Fully typed component props

## Usage

### Basic Example

```jsx
import { HumaneTitle, HumaneBody } from 'humanetype';
import 'humanetype/style.css';

function MyComponent() {
  return (
    <div>
      <HumaneTitle>This is a humanized title</HumaneTitle>
      
      <HumaneBody>
        This is a paragraph with humanizing effects applied to make the 
        text look more natural and hand-written.
      </HumaneBody>
    </div>
  );
}
```

### Title Text Options

The `HumaneTitle` component applies subtle variations to each character:

```jsx
<HumaneTitle 
  options={{
    rotationVariation: 3,    // Controls character rotation (0-15)
    baselineVariation: 1,    // Controls up/down position (0-5)
    trackingVariation: 100,  // Controls letter spacing (0-300)
    sizeVariation: 0,        // Controls size variation (0-300)
  }}
>
  Humanized Heading Text
</HumaneTitle>
```

### Body Text Options

The `HumaneBody` component places text on a curved path:

```jsx
<HumaneBody 
  options={{
    curveIntensity: 15,        // Controls the curve amount (0-45)
    horizontalVariation: 5,    // Controls left/right variation (0-45)
    verticalVariation: 3,      // Controls up/down variation (0-30)
  }}
>
  This paragraph will follow a gentle curved path with slight
  variations to create a more natural, human feel.
</HumaneBody>
```

### Working with Paragraphs and Line Breaks

The library supports both paragraph breaks (double newlines) and line breaks (single newlines):

```jsx
<HumaneBody>
  This is the first paragraph.
  
  This is a second paragraph after a double newline.
  
  Each paragraph gets its own styling and spacing.
</HumaneBody>

<HumaneBody>
  This paragraph has a line break.
  {'\n'}
  This continues on a new line but within the same paragraph.
</HumaneBody>
```

In titles, you can also use newlines to create multi-line titles:

```jsx
<HumaneTitle>
  Title with a line break
  {'\n'}
  on two lines
</HumaneTitle>
```

### Customizing HTML Element

You can specify which HTML element to use with the `as` prop:

```jsx
<HumaneTitle as="h1">Main Heading</HumaneTitle>
<HumaneTitle as="h2">Subheading</HumaneTitle>
<HumaneBody as="div">Block of text</HumaneBody>
```

### Using the Base Component

For more control, you can use the base `HumaneType` component:

```jsx
import { HumaneType } from 'humanetype';

<HumaneType 
  mode="title"
  titleOptions={{
    rotationVariation: 2,
    baselineVariation: 1,
    trackingVariation: 80,
    sizeVariation: 10,
  }}
  as="blockquote"
>
  A custom blockquote with title-style humanization
</HumaneType>
```

## Interactive Demo

The package includes an interactive demo that allows you to experiment with different settings for both title and body text effects. Simply run:

```bash
pnpm dev
```

### Demo Features

- **Sliders** for adjusting all effect parameters in real-time
- **Copy buttons** to copy your current settings to the clipboard, making it easy to use them in your own code
- **Live preview** of how the effects look with your current settings

## Development

To build the library:

```bash
pnpm build
```

## Credits

This library is inspired by the InDesign "Humane Type" plugin. The original plugin concept has been adapted to work as a React component for web applications.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC-BY-4.0).

The original InDesign "Humane Type" plugin that inspired this library is also licensed under the Creative Commons Attribution 4.0 International License.
