import * as React from 'react';

function SvgGear(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M12 1.25A2.75 2.75 0 009.25 4v.752a7.706 7.706 0 00-.43.179l-.532-.532a2.75 2.75 0 00-3.89 3.889l.533.532a7.7 7.7 0 00-.179.43H4a2.75 2.75 0 100 5.5h.752c.056.146.115.289.179.43l-.532.532a2.75 2.75 0 000 3.89l.53-.53-.53.53a2.75 2.75 0 003.889 0l.532-.533c.141.064.284.123.43.179V20a2.75 2.75 0 105.5 0v-.752c.146-.056.289-.115.43-.179l.532.532a2.75 2.75 0 003.89-3.889l-.533-.532c.064-.141.123-.284.179-.43H20a2.75 2.75 0 100-5.5h-.752a7.667 7.667 0 00-.179-.43l.532-.532a2.75 2.75 0 000-3.89l-.53.53.53-.53a2.75 2.75 0 00-3.889 0l-.532.533a7.694 7.694 0 00-.43-.179V4A2.75 2.75 0 0012 1.25zM10.75 4a1.25 1.25 0 012.5 0v1.29a.75.75 0 00.536.719c.415.123.813.289 1.187.492a.75.75 0 00.887-.13l.913-.912a1.25 1.25 0 111.768 1.768l-.913.912a.75.75 0 00-.129.888c.203.374.369.772.492 1.187a.75.75 0 00.72.536H20a1.25 1.25 0 110 2.5h-1.29a.75.75 0 00-.719.536 6.159 6.159 0 01-.492 1.187.75.75 0 00.13.887l.912.913a1.25 1.25 0 11-1.768 1.768l-.912-.913a.75.75 0 00-.888-.129 6.207 6.207 0 01-1.187.492.75.75 0 00-.536.72V20a1.25 1.25 0 11-2.5 0v-1.29a.75.75 0 00-.536-.719 6.205 6.205 0 01-1.187-.492.75.75 0 00-.888.13l-.912.912a1.25 1.25 0 11-1.768-1.768l.913-.912a.75.75 0 00.129-.888 6.209 6.209 0 01-.492-1.187.75.75 0 00-.72-.536H4a1.25 1.25 0 110-2.5h1.29a.75.75 0 00.719-.536c.123-.415.289-.813.492-1.187a.75.75 0 00-.13-.888l-.912-.912a1.25 1.25 0 011.768-1.768l.912.913a.75.75 0 00.888.129 6.205 6.205 0 011.187-.492.75.75 0 00.536-.72V4zm-1 8a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGear;
