import * as React from 'react';

function SvgMemoryCard(props) {
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
        d="M11 2.25h-.172c-1.304 0-2.21-.001-3.005.396-.794.397-1.338 1.123-2.12 2.166L5.6 4.95l-.069.092c-.528.704-.895 1.193-1.089 1.772-.193.58-.192 1.19-.192 2.072v6.169c0 1.367 0 2.47.117 3.337.12.9.38 1.658.981 2.26.602.602 1.36.86 2.26.982.867.116 1.97.116 3.337.116h2.11c1.367 0 2.47 0 3.337-.116.9-.122 1.658-.38 2.26-.982.602-.602.86-1.36.982-2.26.116-.867.116-1.97.116-3.337v-6.11c0-1.367 0-2.47-.116-3.337-.122-.9-.38-1.658-.982-2.26-.602-.602-1.36-.86-2.26-.981-.867-.117-1.97-.117-3.337-.117H11zM8.494 3.988c.438-.22.959-.238 2.506-.238h2c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.755.103 1.756.103 3.191v6c0 1.436-.002 2.437-.103 3.192-.099.734-.28 1.122-.556 1.399-.277.277-.665.457-1.4.556-.754.102-1.756.103-3.191.103h-2c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.277-.277-.457-.665-.556-1.4-.101-.754-.103-1.755-.103-3.191V9c0-1.04.009-1.392.115-1.711.107-.32.311-.607.935-1.439.928-1.238 1.256-1.643 1.694-1.862zM9.75 9a.75.75 0 00-1.5 0v2a.75.75 0 101.5 0V9zM15 6.25a.75.75 0 01.75.75v4a.75.75 0 11-1.5 0V7a.75.75 0 01.75-.75zM12.75 7a.75.75 0 00-1.5 0v4a.75.75 0 101.5 0V7z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgMemoryCard;
