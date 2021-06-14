import * as React from 'react';

function SvgBabyCarriage(props) {
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
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M1 1.25h.5V2v-.75c1.808 0 3.34 1.33 3.596 3.119L5.65 8.25h5.925l1.708-2.847.023-.038c.172-.286.29-.483.426-.658a3.75 3.75 0 012.526-1.431c.22-.026.45-.026.784-.026h.132c.765 0 1.252 0 1.673.076a4.75 4.75 0 013.827 3.827c.076.42.076.908.076 1.674V9a.757.757 0 01-.012.137l-.005.026c-.205 1.23-.368 2.208-.578 2.983-.216.797-.499 1.45-.985 2a4.752 4.752 0 01-1.04.881c-.622.39-1.313.561-2.135.643-.8.08-1.791.08-3.038.08h-2.914c-1.247 0-2.239 0-3.038-.08-.822-.082-1.513-.253-2.135-.643a4.751 4.751 0 01-1.04-.88c-.486-.55-.77-1.204-.985-2.001-.21-.775-.373-1.753-.578-2.983l-.007-.04L5 9l-.742.106-.647-4.525a2.133 2.133 0 00-2.11-1.831H1a.75.75 0 110-1.5zm20.113 8.5H5.887c.142.835.263 1.479.406 2.004.184.68.387 1.089.66 1.399.208.234.447.437.712.603.351.22.787.352 1.49.422.715.071 1.632.072 2.928.072h2.834c1.296 0 2.213 0 2.929-.072.702-.07 1.138-.203 1.489-.422.265-.166.504-.37.711-.603.274-.31.477-.719.661-1.4.143-.524.264-1.168.406-2.003zM7.75 20a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM9 17.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zM17.75 20a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM19 17.25a2.75 2.75 0 100 5.5 2.75 2.75 0 000-5.5zm-1.913-12.5c.881 0 1.222.003 1.493.052a3.25 3.25 0 012.618 2.618c.034.19.046.413.05.83h-7.923l1.245-2.075c.203-.339.274-.454.348-.551a2.25 2.25 0 011.516-.858c.122-.015.258-.016.652-.016z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBabyCarriage;
