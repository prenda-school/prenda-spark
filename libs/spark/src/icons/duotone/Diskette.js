import * as React from 'react';

function SvgDiskette(props) {
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
        fillRule="evenodd"
        d="M3.879 3.879C3 4.757 3 6.172 3 9v6c0 2.828 0 4.243.879 5.121.768.769 1.946.865 4.121.877V17c0-1.886 0-2.828.586-3.414C9.172 13 10.114 13 12 13c1.886 0 2.828 0 3.414.586C16 14.172 16 15.114 16 17v3.998c2.175-.012 3.353-.108 4.121-.877C21 19.243 21 17.828 21 15V9.485c0-1.226 0-1.84-.228-2.39-.229-.552-.662-.985-1.53-1.852l-.485-.486c-.867-.867-1.3-1.3-1.852-1.529C16.355 3 15.741 3 14.515 3H9c-2.828 0-4.243 0-5.121.879z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M16.618 3.921c-.381-.158-.816-.171-2.103-.171H9c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4C3.752 6.562 3.75 7.564 3.75 9v6c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.4.054.872.08 1.441.092v-3.291c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.343.08 2.242v3.291c.569-.012 1.04-.038 1.442-.092.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191V9.485c0-1.287-.013-1.722-.171-2.103-.158-.382-.456-.699-1.367-1.609l-.485-.485c-.91-.91-1.227-1.209-1.609-1.367zm-.564 17.827c.918-.006 1.693-.028 2.338-.114.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337V9.343c0-1.088 0-1.844-.285-2.535-.287-.692-.822-1.226-1.591-1.995l-.101-.1-.485-.486-.101-.1c-.769-.77-1.303-1.305-1.995-1.592-.691-.286-1.447-.286-2.535-.285H8.945c-1.367 0-2.47 0-3.337.117-.9.12-1.658.38-2.26.981-.602.602-.86 1.36-.981 2.26-.117.867-.117 1.97-.117 3.337v6.11c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.645.086 1.42.108 2.338.114a.817.817 0 00.1 0c.286.002.586.002.9.002h6.109l.899-.001a.783.783 0 00.1 0zm-.804-1.498V17c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789-.13-.13-.328-.237-.79-.3-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.066c-.461.063-.659.17-.789.3-.13.13-.237.328-.3.79-.064.482-.066 1.13-.066 2.094v3.25h6.5zM7.25 8A.75.75 0 018 7.25h8a.75.75 0 010 1.5H8A.75.75 0 017.25 8z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgDiskette;
