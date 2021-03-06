// @flow
import * as React from 'react';

import { bdlNeutral03 } from '../../styles/variables';
import AccessibleSVG from '../accessible-svg';

type Props = {
    className?: string,
    color?: string,
    height?: number,
    /** A text-only string describing the icon if it's not purely decorative for accessibility */
    title?: string | React.Element<any>,
    width?: number,
};

const IconHide = ({ className = '', color = bdlNeutral03, height = 16, title, width = 16 }: Props) => (
    <AccessibleSVG className={`icon-hide ${className}`} title={title} width={width} height={height} viewBox="0 0 16 16">
        <path
            d="M7.646 7.646L4.354 4.354a.5.5 0 0 1 0-.708l1.292-1.292a.5.5 0 0 1 .708 0l5.292 5.292a.5.5 0 0 1 0 .708l-5.292 5.292a.5.5 0 0 1-.708 0l-1.292-1.292a.5.5 0 0 1 0-.708l3.292-3.292a.5.5 0 0 0 0-.708z"
            fill={color}
            fillRule="nonzero"
        />
    </AccessibleSVG>
);

export default IconHide;
