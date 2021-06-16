import * as React from 'react';

function SvgRepeatOn(props) {
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
        d="M4 11c0-2.828 0-4.243.879-5.121C5.757 5 7.172 5 10 5h10v8c0 2.828 0 4.243-.879 5.121C18.243 19 16.828 19 14 19H4v-8z"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M16.47 1.47a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9.5c-1.19 0-2.02.001-2.656.073-.62.07-.962.199-1.214.392a2.25 2.25 0 00-.415.415c-.193.252-.322.594-.392 1.214C4.75 8.48 4.75 9.31 4.75 10.5v.5a.75.75 0 01-1.5 0v-.545c0-1.135 0-2.05.082-2.779.085-.754.266-1.403.693-1.959.2-.26.432-.493.692-.692.556-.427 1.205-.608 1.96-.693.729-.082 1.643-.082 2.778-.082h8.735l-1.72-1.72a.75.75 0 010-1.06zm-3.683 6.837A.75.75 0 0113.25 9v6a.75.75 0 01-1.5 0v-4.19l-1.22 1.22a.75.75 0 11-1.06-1.06l2.5-2.5a.75.75 0 01.817-.163zM20.75 13.5V13a.75.75 0 00-1.5 0v.5c0 1.19-.001 2.02-.073 2.656-.07.62-.199.962-.392 1.214a2.25 2.25 0 01-.415.415c-.252.193-.594.322-1.214.392-.636.072-1.466.073-2.656.073H5.81l1.72-1.72a.75.75 0 10-1.06-1.06l-3 3a.75.75 0 000 1.06l3 3a.75.75 0 001.06-1.06l-1.72-1.72h8.735c1.135 0 2.05 0 2.779-.082.754-.085 1.403-.266 1.959-.693.26-.2.493-.432.692-.692.427-.556.608-1.205.693-1.96.082-.729.082-1.643.082-2.778V13.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgRepeatOn;
