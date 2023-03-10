import React from 'react';
import { SvgIcon } from '@mui/material';

const Logo = ({props, sx}) => {
  return (
    <SvgIcon {...props} sx={sx} viewBox="9.911 12.559 33.818 37.575" >
        <defs>
            <linearGradient id="paint500_linear_1501_1259" x1="5.57575" y1="7.30638" x2="30.9394" y2="7.30639" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, 1, 9.032712, 12.558638)">
                <stop class="ccustom" stop-color="#fa0000" fill="#fa0000"/>
                <stop offset="0.3073" class="ccompli1" stop-color="#b60000" fill="#b60000"/>
                <stop offset="0.6042" class="ccompli1" stop-color="#b60000" fill="#b60000"/>
                <stop offset="1" class="ccompli2" stop-color="#720000" fill="#720000"/>
            </linearGradient>
        </defs>
        <path d="M 9.911 40.741 L 9.911 21.953 L 19.305 27.172 L 19.305 35.574 L 26.82 39.801 L 34.335 35.574 L 34.335 27.172 L 43.729 21.953 L 43.729 40.741 L 26.82 50.134 L 9.911 40.741 Z" class="cneutral" fill="#2e0000" stop-color="#2e0000"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M 14.608 24.562 L 9.911 21.953 L 26.82 12.559 L 43.729 21.953 L 39.032 24.562 L 39.032 38.392 L 26.82 45.438 L 14.608 38.392 L 14.608 24.562 Z M 38.523 24.845 L 34.335 27.172 L 34.335 27.119 L 26.82 22.892 L 19.305 27.119 L 19.305 27.172 L 15.117 24.845 L 15.117 38.103 L 26.82 44.855 L 38.523 38.103 L 38.523 24.845 Z" fill="url(#paint500_linear_1501_1259)"/>
    </SvgIcon>
  )
}

export default Logo