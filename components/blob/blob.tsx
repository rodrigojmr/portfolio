import React, { FC } from 'react';
import './blob.module.css';

const Blob = () => {
  return (
    <svg id="blob" xmlns="http://www.w3.org/2000/svg" filter="url(#goo)">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
      <g>
        <ellipse id="el1" cx="250" cy="250" r="100">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="360 250 250"
            to="0 250 250"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse id="el2" cx="250" cy="250" r="100">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse id="el3" cx="250" cy="250" r="100">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 250 250"
            to="360 250 250"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
        <ellipse id="el4" cx="250" cy="250" r="100">
          <animateTransform
            attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="360 250 250"
            to="0 250 250"
            dur="6s"
            repeatCount="indefinite"
          />
        </ellipse>
      </g>
    </svg>
  );
};

export default Blob;
