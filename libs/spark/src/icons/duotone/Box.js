import * as React from 'react';

function SvgBox(props) {
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
        d="M12.971 11.46l4.882-2.712c1.392-.773 2.088-1.16 2.088-1.748 0-.588-.696-.975-2.088-1.748l1.09.605c1.003.557 1.505.836 1.78 1.306.277.47.277 1.043.277 2.19v5.293c0 1.148 0 1.722-.276 2.191-.276.47-.778.749-1.781 1.306l-5 2.778c-.95.527-1.425.791-1.943.791s-.993-.264-1.943-.791l-5-2.778c-1.003-.557-1.504-.836-1.78-1.306C3 16.367 3 15.794 3 14.647V9.353c0-1.148 0-1.722.276-2.191.277-.47.778-.749 1.781-1.306l1.09-.605C4.755 6.025 4.059 6.412 4.059 7c0 .588.696.975 2.088 1.748l4.882 2.712c.475.264.712.396.971.396.26 0 .496-.132.971-.396z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M10.422 3.735c.487-.27.807-.448 1.069-.562.247-.108.389-.135.509-.135s.262.027.51.135c.261.114.581.291 1.068.562l5 2.778c.475.263.799.444 1.04.605L12 11.151 4.382 7.118a16.43 16.43 0 011.04-.605l5-2.778zm-6.665 4.75c-.007.233-.007.514-.007.869v5.292c0 .59 0 .976.03 1.276.03.283.079.427.143.535.064.109.165.222.399.384.247.172.585.36 1.1.646l5 2.778c.348.194.61.34.828.448v-8.261L3.757 8.485zm8.993 12.228c.217-.109.48-.254.828-.448l5-2.778c.515-.285.853-.474 1.1-.646.234-.162.335-.275.4-.384.063-.108.113-.252.141-.535.03-.3.031-.687.031-1.276V9.354c0-.355 0-.636-.007-.87l-7.493 3.968v8.261zM12 1.538c-.398 0-.752.104-1.11.26-.335.147-.718.36-1.167.61l-.03.016-5 2.777-.03.018c-.476.264-.88.488-1.196.708-.337.233-.625.494-.837.855-.213.361-.301.74-.342 1.147-.038.383-.038.846-.038 1.39v5.362c0 .543 0 1.006.038 1.389.041.408.13.786.342 1.147.212.36.5.622.837.855.316.22.72.444 1.195.709l.031.017 5 2.777.03.017c.45.25.832.462 1.167.609.358.156.712.26 1.11.26.398 0 .752-.104 1.11-.26.335-.147.718-.36 1.167-.61l.03-.016 5-2.777.03-.018c.476-.264.88-.488 1.196-.708.337-.233.625-.494.837-.855.212-.361.301-.74.342-1.147.038-.383.038-.846.038-1.39V9.319c0-.543 0-1.006-.038-1.389-.041-.408-.13-.786-.342-1.147-.212-.36-.5-.622-.837-.855-.316-.22-.72-.444-1.195-.708l-.031-.018-5-2.777-.03-.017c-.45-.25-.832-.462-1.167-.609-.358-.156-.712-.26-1.11-.26z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgBox;