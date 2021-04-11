const generateD102 = (fill, outline, viewBoxW = "500", viewBoxH = "500") => `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${viewBoxW} ${viewBoxH}">
  <g>
      <g fill="${fill}">
          <path d="M138.8 247.3L244.2 41.6c1.4-2.8-2-5.5-4.4-3.5L27 220.2c-.8.7-1.3 1.7-1.3 2.7v61.4c0 2.5 2.5 4.2 4.8 3.4L136.8 249c.9-.3 1.6-.9 2-1.7zm224.2 0L257.9 42.1c-1.5-2.9 2.1-5.8 4.6-3.6l212.3 181.7c.8.7 1.3 1.7 1.3 2.7v61.4c0 2.5-2.5 4.2-4.8 3.4L365 249c-.9-.3-1.6-.9-2-1.7z"/>
          <path d="M140.8 243.4L245.4 39.3c2.3-4.4 8.6-4.4 10.9 0l104.6 204.1c1.5 2.9.4 6.5-2.4 8.1l-104.6 60.3a6.05 6.05 0 01-6.1 0l-104.6-60.3c-2.9-1.7-3.9-5.2-2.4-8.1z"/>
          <path d="M246.4 471.9L26.7 291c-1.6-1.4-1.2-4 .9-4.7l109.2-37.1c.7-.2 1.5-.2 2.2.2l110.4 62.9c.8.5 1.4 1.4 1.4 2.4v155.1c0 2.3-2.7 3.6-4.4 2.1zm9.2 0L475.3 291c1.6-1.4 1.2-4-.9-4.7l-109.2-37.1c-.7-.2-1.5-.2-2.2.2l-110.4 62.9c-.8.5-1.4 1.4-1.4 2.4v155.1c0 2.3 2.7 3.6 4.4 2.1z"/>
      </g>
      <g fill="none" stroke="${outline}" stroke-width="12" stroke-miterlimit="10">
          <path d="M138.8 247.3L244.2 41.6c1.4-2.8-2-5.5-4.4-3.5L27 220.2c-.8.7-1.3 1.7-1.3 2.7v61.4c0 2.5 2.5 4.2 4.8 3.4L136.8 249c.9-.3 1.6-.9 2-1.7zm224.2 0L257.9 42.1c-1.5-2.9 2.1-5.8 4.6-3.6l212.3 181.7c.8.7 1.3 1.7 1.3 2.7v61.4c0 2.5-2.5 4.2-4.8 3.4L365 249c-.9-.3-1.6-.9-2-1.7z"/>
          <path d="M140.8 243.4L245.4 39.3c2.3-4.4 8.6-4.4 10.9 0l104.6 204.1c1.5 2.9.4 6.5-2.4 8.1l-104.6 60.3a6.05 6.05 0 01-6.1 0l-104.6-60.3c-2.9-1.7-3.9-5.2-2.4-8.1z"/>
          <path d="M246.4 471.9L26.7 291c-1.6-1.4-1.2-4 .9-4.7l109.2-37.1c.7-.2 1.5-.2 2.2.2l110.4 62.9c.8.5 1.4 1.4 1.4 2.4v155.1c0 2.3-2.7 3.6-4.4 2.1zm9.2 0L475.3 291c1.6-1.4 1.2-4-.9-4.7l-109.2-37.1c-.7-.2-1.5-.2-2.2.2l-110.4 62.9c-.8.5-1.4 1.4-1.4 2.4v155.1c0 2.3 2.7 3.6 4.4 2.1z"/>
      </g>
  </g>
  <g>
      <path d="M258.4 184.1c0-6-2.6-9.1-7.9-9.1-2.9 0-5.1 1-6.5 3.1-1.4 2.1-2.1 5.3-2.3 9.6h-18.5c.4-9.5 3.3-16.7 8.6-21.5 5.3-4.8 12-7.2 20.1-7.2 8.5 0 14.9 2.1 19.2 6.4 4.3 4.3 6.5 9.8 6.5 16.7 0 7.6-2.9 15-8.7 22.3-5.8 7.3-12.8 13.4-20.9 18.4h31v15.3h-55.7V224c23.4-16.7 35.1-30 35.1-39.9z"/>
      <path d="M166 375.5c-3.4-1.6-6.4-3.9-8.9-6.7-2.6-2.9-4.5-6.1-6-9.7-1.7-4.4-2.2-8-1.4-10.7.8-2.7 2.4-4.4 4.9-5.1l-.2-.5c-8.2-2.8-14-8.3-17.2-16.5-1.5-3.9-2.2-7.4-1.9-10.5.3-3.1 1.4-5.4 3.6-7.1 2.1-1.7 5.1-2.6 9-2.6 6.3 0 12.1 1.9 17.4 5.8 5.2 3.9 9.6 9.7 13 17.6h-13c-1.3-3-2.9-5.4-4.8-7.1-1.9-1.7-4.1-2.6-6.5-2.6-1.9 0-3.2.7-3.7 2.1-.6 1.4-.4 3.2.5 5.5 2.2 5.6 6.6 8.4 13.1 8.4h2.5l5.3 13.4H169c-5.9-.1-7.8 2.5-5.7 7.8.9 2.3 2.1 4.1 3.6 5.4 1.5 1.3 3.1 1.9 4.8 1.9 1.9 0 3-.8 3.5-2.4.5-1.6.3-3.7-.6-6.3h13c2.6 7.2 2.9 12.7 1.1 16.6-1.9 3.9-5.8 5.8-11.9 5.8-3.8-.1-7.4-.9-10.8-2.5z"/>
      <path d="M346.5 358.8l-3.8 15.4h-22.3l17-68.2h14l-13.2 52.7h8.3z"/>
      <path d="M134.2 149.9c2.8-1.4 5.7-2 8.7-1.6 3 .4 5.7 1.9 8.3 4.5 2.6 2.7 4.1 5.7 4.7 9 .6 3.3.3 6.6-.7 9.9-1.1 3.3-2.7 6.2-4.9 8.9-2.4 2.9-4.9 5-7.4 6.3-2.5 1.2-5 1.6-7.4 1.1 1.4 6.6-.6 13.2-6 19.8-3.1 3.8-6.3 6.4-9.6 8-3.3 1.5-6.5 2-9.5 1.4-3-.6-5.7-2.1-8.1-4.6-2.3-2.4-3.9-5.3-4.7-8.7-.8-3.4-.6-7 .5-10.8 1.1-3.9 3.2-7.7 6.3-11.4 5.4-6.6 11.1-9.4 17.1-8.3-.6-2.7-.5-5.5.4-8.4.9-2.9 2.5-5.8 5-8.8 1.9-2.8 4.5-4.8 7.3-6.3zm-24.9 45.9c-.2 2.3.4 4.2 1.9 5.8 1.5 1.6 3.3 2.1 5.3 1.7 2-.4 4-1.9 5.9-4.2 1.9-2.4 3-4.7 3.2-7 .2-2.3-.4-4.2-1.9-5.7s-3.2-2.1-5.2-1.7c-2 .4-4 1.8-5.9 4.1-2 2.4-3 4.7-3.3 7zm20.3-23.3c-.2 1.9.3 3.5 1.6 4.7 1.2 1.3 2.7 1.7 4.3 1.4 1.7-.4 3.4-1.6 5.1-3.8 1.7-2.1 2.7-4.1 3-6.1.2-2-.2-3.6-1.4-4.8-1.2-1.3-2.7-1.7-4.4-1.2-1.7.4-3.5 1.7-5.2 3.8-1.8 2.1-2.8 4.1-3 6z"/>
      <path d="M367.6 165.4c-1.7-.4-3.4 0-5 1.1-2.4 1.7-3 4.1-1.9 7.1 1.1 3.1 4 7 8.6 11.8-.9-2.3-1-4.6-.3-6.8.8-2.2 2.3-4.2 4.6-5.8 4.2-2.9 8.7-3.9 13.5-2.9 4.8 1 9.6 4 14.1 8.9 2.9 3.1 4.8 6.3 5.8 9.6s1 6.4-.2 9.4c-1.1 3-3.3 5.6-6.6 7.9-6.4 4.5-12.8 5.5-19.1 3-6.3-2.5-12.9-7.5-19.8-15-7.9-8.6-12.4-15.9-13.5-21.8-1.1-5.9 1.3-10.9 7.2-15 4.7-3.2 9.5-4.3 14.4-3.2 5 1.1 9.6 3.7 13.8 7.8l-10 7c-2-1.7-3.9-2.7-5.6-3.1zm16.9 32.4c2.2.5 4.4 0 6.5-1.4 1.9-1.3 2.8-2.9 2.9-4.7.1-1.8-.9-3.8-2.8-5.9-1.9-2.1-4-3.3-6.1-3.7-2.1-.4-4.1.1-6 1.4-1.8 1.2-2.8 2.8-3 4.7-.2 1.9.6 3.9 2.4 5.8 1.9 2 3.9 3.3 6.1 3.8z"/>
      <path d="M394.9 236.8l30.1-27.3c1-.9 1-3 0-4.7l-1.9-3.1c-1-1.7-2.7-2.2-3.7-1.3l-30.1 27.3c-1 .9-1 3 0 4.7l1.9 3.1c1 1.6 2.7 2.2 3.7 1.3z"/>
  </g>
</svg>
`;

module.exports = generateD102;
