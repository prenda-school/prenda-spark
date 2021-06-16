import * as React from 'react';

function SvgPrinter(props) {
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
        d="M10 2.25h-.052c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.418a3.33 3.33 0 00-1.125.386 3.75 3.75 0 00-1.373 1.373c-.277.481-.394 1.011-.449 1.617-.053.589-.053 1.318-.053 2.222V15c0 1.815 1.29 3.33 3.003 3.676.003.171.008.327.018.47.021.316.068.616.188.906a2.75 2.75 0 001.489 1.489c.29.12.59.167.907.188.304.021.675.021 1.12.021h6.05c.445 0 .816 0 1.12-.02.317-.022.617-.069.907-.19a2.75 2.75 0 001.489-1.488c.12-.29.167-.59.188-.907.01-.142.015-.298.018-.47A3.751 3.751 0 0021.75 15v-2.036c0-.904 0-1.633-.053-2.222-.055-.606-.172-1.136-.45-1.617a3.75 3.75 0 00-1.372-1.373 3.332 3.332 0 00-1.125-.386v-.418c0-.898 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.594-.08-1.344-.08-2.242-.08H10zm7.25 5.006V7c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788C6.753 5.388 6.75 6.036 6.75 7v.256c.365-.006.768-.006 1.214-.006h8.072c.446 0 .85 0 1.214.006zm1.492 9.869A2.25 2.25 0 0020.25 15v-2c0-.948 0-1.61-.047-2.122-.046-.502-.13-.788-.254-1.003a2.25 2.25 0 00-.824-.824c-.215-.124-.5-.208-1.003-.254-.512-.046-1.174-.047-2.122-.047H8c-.948 0-1.61 0-2.122.047-.503.046-.788.13-1.003.254a2.25 2.25 0 00-.824.824c-.124.215-.208.5-.254 1.003-.046.512-.047 1.174-.047 2.122v2c0 .983.63 1.818 1.508 2.125.003-.096.007-.186.013-.27.021-.317.068-.617.188-.907a2.75 2.75 0 011.489-1.489c.29-.12.59-.167.907-.188.304-.021.675-.021 1.12-.021h6.05c.445 0 .816 0 1.12.02.317.022.617.069.907.19a2.75 2.75 0 011.489 1.488c.12.29.167.59.188.907.006.084.01.174.013.27zm-11.22-1.28c.077-.032.194-.061.435-.078A17.07 17.07 0 019 15.75h6c.476 0 .796 0 1.043.017.241.017.358.046.435.078.307.127.55.37.677.677.032.077.061.194.078.435.017.247.017.567.017 1.043s0 .796-.017 1.043c-.017.241-.046.358-.078.435a1.25 1.25 0 01-.677.677c-.077.032-.194.061-.435.078-.247.017-.567.017-1.043.017H9c-.476 0-.796 0-1.043-.017-.241-.017-.358-.046-.435-.078a1.25 1.25 0 01-.677-.677c-.032-.077-.061-.194-.078-.435A17.091 17.091 0 016.75 18c0-.476 0-.796.017-1.043.017-.241.046-.358.078-.435.127-.307.37-.55.677-.677zM5.25 11a.75.75 0 01.75-.75h1a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgPrinter;
