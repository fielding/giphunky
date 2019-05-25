import React from 'react';

const SvgCursor = props => (
      <svg xmlns="http://www.w3.org/2000/svg" height={props.size}
        width={String(props.size * (47 / 62))} viewBox="0 0 47 62">
        <defs>
          <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={props.gradient.start} />
            <stop offset="100%" stopColor={props.gradient.end} />
          </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
          <polyline fill="#FFFFFE" points="41.43 25.144 41.43 22.355 38.642 22.355 38.642 30.72 35.885 30.72 35.885 22.355 35.854 22.355 35.854 19.599 30.403 19.599 30.403 27.931 27.646 27.931 27.646 16.78 22.133 16.78 22.133 27.931 19.376 27.931 19.376 2.839 13.862 2.839 13.862 39.085 11.104 39.085 11.104 30.72 8.35 30.72 8.35 27.931 2.836 27.931 2.836 33.508 5.592 33.508 5.592 36.297 8.35 36.297 8.35 41.872 11.104 41.872 11.104 47.449 13.862 47.449 13.862 53.024 16.619 53.024 16.619 58.599 38.674 58.599 38.674 53.024 41.43 53.024 41.43 44.66 44.187 44.66 44.187 25.144 41.43 25.144"/>
          <path fill="url(#a)" d="M13.862,2.839 L19.376,2.839 L19.376,0.051 L13.862,0.051 L13.862,2.839 Z M11.104,30.72 L11.104,39.085 L13.862,39.085 L13.862,2.839 L11.104,2.839 L11.104,27.931 L8.35,27.931 L8.35,30.72 L11.104,30.72 Z M8.35,27.931 L8.35,25.144 L0.078,25.144 L0.078,33.508 L2.836,33.508 L2.836,27.931 L8.35,27.931 Z M2.836,36.297 L5.592,36.297 L5.592,33.508 L2.836,33.508 L2.836,36.297 Z M11.104,53.024 L13.862,53.024 L13.862,47.449 L11.104,47.449 L11.104,53.024 Z M8.35,47.449 L11.104,47.449 L11.104,41.872 L8.35,41.872 L8.35,47.449 Z M38.674,58.599 L16.619,58.599 L16.619,53.024 L13.862,53.024 L13.862,61.389 L41.43,61.389 L41.43,53.024 L38.674,53.024 L38.674,58.599 Z M41.43,53.024 L44.187,53.024 L44.187,44.66 L41.43,44.66 L41.43,53.024 Z M44.187,44.66 L46.943,44.66 L46.943,25.144 L44.187,25.144 L44.187,44.66 Z M41.43,25.144 L44.187,25.144 L44.187,22.355 L41.43,22.355 L41.43,25.144 Z M35.885,22.355 L35.885,30.72 L38.642,30.72 L38.642,22.355 L41.43,22.355 L41.43,19.599 L35.854,19.599 L35.854,22.355 L35.885,22.355 Z M5.592,41.872 L8.35,41.872 L8.35,36.297 L5.592,36.297 L5.592,41.872 Z M22.133,27.931 L22.133,16.78 L27.646,16.78 L27.646,13.991 L22.133,13.991 L22.133,2.839 L19.376,2.839 L19.376,27.931 L22.133,27.931 Z M30.403,27.931 L30.403,19.599 L35.854,19.599 L35.854,16.843 L30.403,16.843 L30.403,16.78 L27.646,16.78 L27.646,27.931 L30.403,27.931 L30.403,27.931 Z"/>
        </g>
      </svg>
    );

export default SvgCursor;