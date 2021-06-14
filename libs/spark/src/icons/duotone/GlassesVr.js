import * as React from 'react';

function SvgGlassesVr(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      style={props.style}
    >
      <rect
        width={18}
        height={10}
        x={3}
        y={10}
        fill={props.fillColor || '#F0F1F2'}
        rx={4}
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M6.624 3.584a.75.75 0 01-.208 1.04l-1.22.813c-.447.298-.74.494-.954.667-.202.164-.29.274-.344.377-.055.102-.098.236-.122.495-.026.275-.026.627-.026 1.165v2.395a4.745 4.745 0 012.323-1.195c.46-.091.994-.091 1.832-.091h8.19c.838 0 1.372 0 1.832.091.89.177 1.689.6 2.323 1.194V8.141c0-.538-.001-.89-.027-1.165-.024-.259-.066-.393-.121-.495-.055-.103-.143-.213-.345-.377-.214-.173-.507-.37-.955-.667l-1.218-.813a.75.75 0 01.832-1.248l1.218.812.028.019c.413.275.764.51 1.04.732.292.237.54.494.722.834.182.34.258.688.293 1.064.033.352.033.775.033 1.271V16.5a.747.747 0 01-.072.32 4.75 4.75 0 01-3.752 3.839c-.46.091-.993.091-1.83.091H7.904c-.838 0-1.372 0-1.832-.091a4.75 4.75 0 01-3.75-3.836.747.747 0 01-.073-.323V8.108c0-.496 0-.919.032-1.271.035-.376.111-.725.293-1.064.182-.34.43-.597.723-.834.275-.223.627-.457 1.04-.732l.027-.019 1.219-.812a.75.75 0 011.04.208zM20.25 15.419c-.002.663-.013.967-.062 1.215a3.25 3.25 0 01-2.554 2.553c-.296.06-.669.063-1.634.063H8c-.965 0-1.338-.004-1.634-.063a3.25 3.25 0 01-2.553-2.553c-.06-.296-.063-.669-.063-1.634 0-.965.004-1.338.063-1.634a3.25 3.25 0 012.553-2.554c.296-.058.669-.062 1.634-.062h8c.965 0 1.338.004 1.634.062a3.25 3.25 0 012.554 2.554c.05.248.06.552.062 1.215v.838zM10 15a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgGlassesVr;
