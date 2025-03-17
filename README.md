# Humane

A React component library for adding natural, humanized variations to text. Inspired by the InDesign "Humane Type" plugin, this library allows you to create text with subtle imperfections that make it appear more hand-crafted and less mechanical.

## Installation

```bash
npm install humane
# or
yarn add humane
# or
pnpm add humane
```

## Features

- **Title Text Effects**: Apply subtle character-by-character variations to create naturally imperfect titles
- **Body Text Effects**: Transform paragraphs by placing text on curved paths
- **Customizable**: Control the intensity of all effects
- **Accessibility**: Maintains text selection and screen reader compatibility
- **TypeScript Support**: Fully typed component props

## Usage

### Basic Example

```jsx
import { HumaneTitle, HumaneBody } from 'humane';
import 'humane/style.css';

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
import { HumaneType } from 'humane';

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

## Development

To run the development server with the demo application:

```bash
pnpm dev
```

To build the library:

```bash
pnpm build
```

## License

Creative Commons Attribution 4.0 International License
