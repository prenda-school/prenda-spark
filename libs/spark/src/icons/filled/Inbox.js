import * as React from 'react';

function SvgInbox(props) {
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
        d="M11.886 2.25h-.05c-1.489 0-2.675 0-3.622.115-.978.118-1.788.367-2.484.923-.697.556-1.119 1.29-1.45 2.217-.323.899-.586 2.055-.916 3.508l-.01.048-.578 2.539-.006.03c-.133.582-.207.91-.26 1.243a9.75 9.75 0 00-.09 2.21c.025.336.073.67.157 1.26l.005.031.017.123c.158 1.106.259 1.812.517 2.404a4.75 4.75 0 003.086 2.677c.624.172 1.337.172 2.453.172h6.69c1.116 0 1.83 0 2.453-.172a4.75 4.75 0 003.086-2.677c.258-.592.36-1.298.517-2.404l.018-.123.004-.03c.084-.591.132-.925.157-1.261a9.755 9.755 0 00-.09-2.21 18.734 18.734 0 00-.26-1.243l-.006-.03-.577-2.54-.011-.047c-.33-1.453-.593-2.61-.915-3.508-.332-.927-.754-1.661-1.45-2.217-.697-.556-1.506-.805-2.485-.923-.947-.115-2.133-.115-3.623-.115h-.277zm-5.22 2.21c.398-.318.901-.506 1.728-.606.847-.103 1.942-.104 3.492-.104h.228c1.55 0 2.645.001 3.492.104.827.1 1.33.288 1.729.606.398.318.693.767.974 1.551.287.803.531 1.871.875 3.382l.577 2.54c.14.62.203.896.246 1.171.076.485-.32.896-.81.896h-1.394c-.715 0-1.072 0-1.393.112a1.97 1.97 0 00-.544.292c-.271.204-.47.501-.866 1.096-.396.595-.595.892-.866 1.096a1.976 1.976 0 01-.545.292c-.32.112-.677.112-1.392.112h-.394c-.715 0-1.072 0-1.393-.112a1.999 1.999 0 01-.545-.292c-.27-.204-.469-.501-.865-1.096-.396-.595-.595-.892-.865-1.096a2 2 0 00-.545-.292C7.27 14 6.912 14 6.197 14H4.804c-.49 0-.887-.411-.811-.896.043-.275.105-.552.246-1.172l.577-2.539c.344-1.511.588-2.579.875-3.382.281-.784.576-1.233.974-1.551z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgInbox;