import * as React from 'react';

function SvgWebcamSlash(props) {
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
        d="M8.754 15.204A7 7 0 015 9c0-1.074.242-2.09.674-3l9.148 9.149C14.941 15.059 15 15 15 15l1.879 1.879c2.18 2.18 3.269 3.269 2.886 4.195C19.38 22 17.84 22 14.757 22H7.47c-2.069 0-3.103 0-3.69-.94-.588-.941-.203-1.729.566-3.303A13.965 13.965 0 017 14s.646.646 1.754 1.204z"
        clipRule="evenodd"
      />
      <path
        fill="currentcolor"
        fillRule="evenodd"
        d="M1.47 1.47a.75.75 0 011.06 0l3.782 3.782 9.436 9.436 6.782 6.782a.75.75 0 11-1.06 1.06l-.833-.832a2.647 2.647 0 01-.607.588c-.698.466-1.468.465-2.416.464H6.386c-.948.001-1.718.002-2.416-.464a2.829 2.829 0 01-.739-.772 2.828 2.828 0 01-.43-.98c-.162-.82.086-1.417.387-2.14l.036-.086c.578-1.392 1.507-2.969 2.989-4.153A7.721 7.721 0 014.25 9c0-1.086.224-2.121.628-3.061L1.47 2.53a.75.75 0 010-1.06zm5.86 13.717c-1.319.982-2.175 2.38-2.722 3.696-.346.834-.403 1.023-.336 1.36.018.093.085.257.206.438.12.18.246.305.325.358.276.184.558.211 1.732.211h10.928c1.175 0 1.457-.027 1.732-.21a1.46 1.46 0 00.364-.42l-4.499-4.498a7.727 7.727 0 01-3.06.628 7.716 7.716 0 01-4.669-1.563zM6.043 7.103a6.25 6.25 0 007.854 7.854L6.043 7.103zM12 2.75a6.218 6.218 0 00-3.57 1.12.75.75 0 11-.86-1.23 7.75 7.75 0 0110.79 10.79.75.75 0 11-1.23-.86A6.25 6.25 0 0012 2.75zM11.25 7a.75.75 0 01.75-.75A2.75 2.75 0 0114.75 9a.75.75 0 01-1.5 0c0-.69-.56-1.25-1.25-1.25a.75.75 0 01-.75-.75z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgWebcamSlash;
