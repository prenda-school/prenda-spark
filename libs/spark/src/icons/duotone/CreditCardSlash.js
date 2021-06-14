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
        fill={props.fillColor || '#F0F1F2'}
        d="M2 15.2V8.8c0-.29 0-.556.002-.8.008-1.165.054-1.831.325-2.362a3 3 0 011.31-1.31 2.3 2.3 0 01.506-.184L8 8l11.856 11.857C19.268 20 18.476 20 17.2 20H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 01-1.311-1.31C2 17.72 2 16.88 2 15.2z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M1.47 1.47a.75.75 0 011.06 0l2.144 2.143L8.53 7.47l11.857 11.856 2.143 2.144a.75.75 0 01-1.06 1.06l-1.865-1.864c-.608.084-1.353.084-2.295.084H6.768c-.813 0-1.469 0-2-.043-.546-.045-1.026-.14-1.47-.366a3.75 3.75 0 01-1.64-1.638c-.226-.445-.32-.925-.365-1.471-.043-.531-.043-1.187-.043-2V8.798l.001-.752a.768.768 0 01.001-.102c.009-1.107.048-1.942.407-2.646a3.75 3.75 0 011.2-1.377L1.47 2.53a.75.75 0 010-1.061zm2.48 3.54a2.25 2.25 0 00-.955.969c-.134.262-.2.602-.227 1.271h3.421L3.95 5.01zm3.74 3.74H2.75v6.45c0 .853 0 1.447.038 1.91.037.453.106.714.207.912.216.423.56.767.983.983.198.1.459.17.913.207.462.038 1.056.038 1.909.038h10.4c.377 0 .702 0 .985-.004L7.69 8.75zm11.42-3.962c-.463-.037-1.058-.038-1.91-.038H9a.75.75 0 110-1.5h8.232c.813 0 1.468 0 2 .043.546.045 1.026.14 1.47.366a3.75 3.75 0 011.64 1.639c.358.704.397 1.54.406 2.646a.752.752 0 010 .102c.002.232.002.483.002.752V17a.75.75 0 01-1.5 0V8.75H13a.75.75 0 010-1.5h8.232c-.028-.669-.094-1.01-.227-1.271a2.25 2.25 0 00-.984-.984c-.197-.1-.458-.17-.912-.207z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgCreditCardSlash;
