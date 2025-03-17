import HumaneType from './HumaneType';
import { HumaneTitleProps } from '../types';

/**
 * A component that applies humanizing effects to title text
 * 
 * @param props Component props
 * @returns React component
 */
const HumaneTitle = ({
  children,
  options = {},
  as = 'h2',
  ...restProps
}: HumaneTitleProps) => {
  return (
    <HumaneType
      mode="title"
      titleOptions={options}
      as={as}
      {...restProps}
    >
      {children}
    </HumaneType>
  );
};

export default HumaneTitle;
