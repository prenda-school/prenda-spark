import * as React from 'react';

function SvgImage2(props) {
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
        d="M16.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3.962 14.837l1.673-2.603C7.15 9.877 7.908 8.699 9 8.699s1.85 1.178 3.365 3.535l2.135 3.322c1.172-1.824 1.758-2.736 2.553-2.918.294-.068.6-.068.894 0 .795.182 1.376 1.086 2.538 2.894l.27.42c1.1 1.71 1.649 2.565 1.57 3.271a2 2 0 01-.726 1.328C21.048 21 20.032 21 18 21H7.327c-3.234 0-4.85 0-5.42-1.042-.568-1.041.306-2.401 2.055-5.121z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M14.75 5.5a1.75 1.75 0 113.5 0 1.75 1.75 0 01-3.5 0zm1.75-3.25a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zM6.266 12.64c.771-1.2 1.305-2.027 1.775-2.564.461-.527.735-.627.959-.627.224 0 .498.1.959.627.47.537 1.004 1.364 1.775 2.564l2.135 3.321 2.757 4.289H7.327c-1.642 0-2.788-.002-3.6-.122-.808-.12-1.05-.325-1.16-.529-.112-.204-.154-.518.182-1.263.338-.748.956-1.712 1.844-3.093l1.673-2.603zm14.016 7.557c-.458.045-1.056.052-1.873.053l-3.017-4.694c.46-.713.803-1.229 1.106-1.6.357-.434.569-.552.723-.587a1.25 1.25 0 01.558 0c.155.036.366.152.72.582.355.433.764 1.067 1.355 1.987l.27.42c.559.868.946 1.473 1.19 1.949.247.48.28.706.265.833a1.25 1.25 0 01-.453.83c-.1.08-.306.175-.844.227zm-7.286-8.369l1.507 2.345c.303-.46.576-.852.835-1.167.428-.522.906-.952 1.547-1.099a2.752 2.752 0 011.23 0c.64.147 1.116.573 1.543 1.093.418.508.873 1.217 1.432 2.086l.026.04.27.421.023.035c.53.825.958 1.491 1.24 2.04.282.55.486 1.105.42 1.685a2.75 2.75 0 01-.996 1.826c-.453.368-1.03.498-1.646.557-.613.06-1.405.06-2.386.06H7.261c-1.561 0-2.818 0-3.753-.138-.95-.141-1.801-.456-2.258-1.294-.458-.838-.263-1.725.133-2.6.388-.86 1.068-1.918 1.912-3.231l.036-.056 1.673-2.603.035-.053c.728-1.133 1.32-2.055 1.873-2.686.569-.651 1.22-1.14 2.088-1.14.868 0 1.519.489 2.088 1.14.552.63 1.145 1.553 1.873 2.686l.035.053z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgImage2;
