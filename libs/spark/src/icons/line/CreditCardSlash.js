import * as React from 'react';

function SvgCreditCardSlash(props) {
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
        d="M1.47 1.47a.75.75 0 011.06 0l2.144 2.143L8.53 7.47l11.857 11.856 2.143 2.144a.75.75 0 01-1.06 1.06l-1.865-1.864c-.607.084-1.353.084-2.295.084H6.768c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 01-1.64-1.638c-.226-.445-.32-.925-.365-1.471-.043-.531-.043-1.187-.043-2V8.798l.001-.752a.768.768 0 01.001-.102c.009-1.107.048-1.942.407-2.646a3.75 3.75 0 011.2-1.377L1.47 2.53a.75.75 0 010-1.061zm2.48 3.54a2.25 2.25 0 00-.955.969c-.133.262-.2.602-.227 1.271h3.421L3.95 5.01zm3.74 3.74H2.75v6.45c0 .853 0 1.447.038 1.91.037.453.107.714.207.912.216.423.56.767.984.983.197.1.458.17.912.207.462.038 1.057.038 1.909.038h10.4c.378 0 .703 0 .986-.004L7.689 8.75zm11.42-3.962c-.463-.037-1.058-.038-1.91-.038H9a.75.75 0 110-1.5h8.232c.813 0 1.469 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 011.64 1.639c.358.704.397 1.54.406 2.646a.752.752 0 010 .102c.002.232.002.483.002.752V17a.75.75 0 01-1.5 0V8.75H13a.75.75 0 010-1.5h8.232c-.027-.669-.094-1.01-.227-1.271a2.25 2.25 0 00-.983-.984c-.198-.1-.459-.17-.913-.207z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCreditCardSlash;
