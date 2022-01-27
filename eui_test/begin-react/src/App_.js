import React from 'react';
import Counter from './Counter';
import MockData from './MainView2.json';

function App() {
  const { ObjectList, ClassList, TagList } = MockData;
  console.log(TagList);
  return (
    <div>
      <svg
        version="1.1"
        baseProfile="full"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="red" />

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
          SVG
        </text>
      </svg>

      <img alt="img/test_image2.svg" src="img/test_image2.svg" />

      <svg
        version="1.1"
        baseProfile="full"
        width="300"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <rect width="100%" height="100%" fill="red" />

        <circle cx="150" cy="100" r="80" fill="green" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">
          SVG
        </text>
      </svg>
      <br />

      <svg
        version="1.1"
        baseProfile="full"
        width="320"
        height="204"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image href="img/test_image.jpg" />
      </svg>

      <img alt="img/test_image.jpg" src="img/test_image.jpg" />
      <br />

      <svg
        width="200"
        height="250"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="30"
          height="30"
          stroke="black"
          fill="transparent"
          stroke-width="5"
        />
        <rect
          x="60"
          y="10"
          rx="10"
          ry="10"
          width="30"
          height="30"
          stroke="black"
          fill="transparent"
          stroke-width="5"
        />

        <circle
          cx="25"
          cy="75"
          r="20"
          stroke="red"
          fill="transparent"
          stroke-width="5"
        />
        <ellipse
          cx="75"
          cy="75"
          rx="20"
          ry="5"
          stroke="red"
          fill="transparent"
          stroke-width="5"
        />

        <line
          x1="10"
          x2="50"
          y1="110"
          y2="150"
          stroke="orange"
          stroke-width="5"
        />
        <polyline
          points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
          stroke="orange"
          fill="transparent"
          stroke-width="5"
        />

        <polygon
          points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
          stroke="green"
          fill="transparent"
          stroke-width="5"
        />

        <path
          d="M20,230 Q40,205 50,230 T90,230"
          fill="none"
          stroke="blue"
          stroke-width="5"
        />
      </svg>
    </div>
  );
}

export default App;
