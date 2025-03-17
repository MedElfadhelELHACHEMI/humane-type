import HumaneType from './HumaneType';
import { HumaneBodyProps } from '../types';

/**
 * A component that applies humanizing effects to body text
 * 
 * @param props Component props
 * @returns React component
 */
const HumaneBody = ({
  children,
  options = {},
  as = 'p',
  ...restProps
}: HumaneBodyProps) => {
  return (
    <HumaneType
      mode="body"
      bodyOptions={options}
      as={as}
      {...restProps}
    >
      {children}
    </HumaneType>
  );
};

export default HumaneBody;
