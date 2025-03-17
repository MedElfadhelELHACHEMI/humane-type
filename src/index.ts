// Main package export file
// Export all components, hooks, and utilities from this file

import HumaneType from './components/HumaneType';
import HumaneTitle from './components/HumaneTitle';
import HumaneBody from './components/HumaneBody';

// Import CSS
import './components/HumaneType.css';

// Type exports
export type { 
  HumaneTypeProps, 
  HumaneTitleProps, 
  HumaneBodyProps,
  BodyOptions,
  TitleOptions 
} from './types';

// Component exports
export { HumaneType, HumaneTitle, HumaneBody };

// Default export 
export default {
  HumaneType,
  HumaneTitle,
  HumaneBody,
};
