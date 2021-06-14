import * as React from 'react';

function SvgComments(props) {
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
        d="M8 3.25h-.055c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337V18a.75.75 0 001.166.624l1.488-.992c.787-.525 1.058-.696 1.352-.786.295-.089.615-.096 1.56-.096H7a.75.75 0 000-1.5h-.287c-.802 0-1.358 0-1.891.16-.533.162-.996.471-1.663.916l-.087.058-.322.215V10c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556C5.562 4.752 6.564 4.75 8 4.75h5c.948 0 1.61 0 2.122.047.502.046.788.13 1.003.254.342.198.626.482.824.824.124.215.208.5.254 1.003.033.365.043.806.046 1.372h-3.301c-.899 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v1.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.726 1.65.455.456 1.022.642 1.65.726.594.08 1.344.08 2.242.08h4.825l2.811 1.874A.75.75 0 0022.75 20v-7.052c0-.899 0-1.648-.08-2.242-.084-.628-.27-1.195-.726-1.65-.455-.456-1.022-.642-1.65-.726-.433-.058-.95-.074-1.545-.078a18.426 18.426 0 00-.052-1.51c-.055-.606-.172-1.136-.45-1.617a3.75 3.75 0 00-1.372-1.373c-.481-.277-1.011-.394-1.617-.449-.589-.053-1.318-.053-2.222-.053H8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgComments;
