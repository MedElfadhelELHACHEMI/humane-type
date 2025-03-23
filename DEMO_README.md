# Humane Type Demo

This repository contains both the Humane Type library and a demo application showcasing its features.

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Building

### Building the Library

To build the library for npm publishing:

```bash
npm run build:lib
```

This will generate the distribution files in the `dist` directory.

### Building the Demo Application

To build the demo application for deployment:

```bash
npm run build:app
```

This will generate the demo application in the `dist-app` directory.

## Deployment

This project is configured for easy deployment on Vercel. The `vercel.json` file is set up to build the demo application automatically.

## License

This project is licensed under the Creative Commons Attribution 4.0 International License (CC-BY-4.0).
