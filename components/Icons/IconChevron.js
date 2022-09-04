import React from 'react';
import propTypes from 'prop-types';

export default function IconChevron({
    width = '24',
    height = '24',
    fill = '#000',
    rotate = '0',
}) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            style={{transform: `rotate(${rotate}deg)`}}>
            <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill={fill}
            />
        </svg>
    );
}

IconChevron.propTypes = {
    width: propTypes.string,
    height: propTypes.string,
    fill: propTypes.string,
    rotate: propTypes.string,
};
