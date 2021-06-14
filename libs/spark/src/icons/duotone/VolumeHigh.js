import * as React from 'react';

function SvgVolumeHigh(props) {
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
        d="M7.127 16H7c-1.886 0-2.828 0-3.414-.586C3 14.828 3 13.886 3 12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8h.127c.92 0 1.381 0 1.785-.189.403-.189.698-.543 1.287-1.25l.265-.317c1.478-1.774 2.217-2.661 2.876-2.422.66.239.66 1.393.66 3.702v8.952c0 2.309 0 3.463-.66 3.702-.66.239-1.398-.648-2.876-2.422l-.265-.317c-.59-.707-.884-1.061-1.287-1.25C8.508 16 8.048 16 7.126 16z"
      />
      <path
        fill="currentcolor"
        fillOpacity={0.72}
        fillRule="evenodd"
        d="M11.04 6.724c.755-.906 1.27-1.522 1.675-1.893a1.76 1.76 0 01.359-.272c.028.065.067.195.1.439.074.544.076 1.347.076 2.526v8.952c0 1.179-.002 1.982-.076 2.527a1.793 1.793 0 01-.1.438 1.794 1.794 0 01-.359-.272c-.405-.371-.92-.987-1.675-1.893l-.264-.317-.088-.105c-.503-.604-.9-1.083-1.458-1.344-.558-.262-1.18-.26-1.967-.26H7c-.964 0-1.612-.002-2.095-.066-.461-.063-.659-.17-.789-.3-.13-.13-.237-.328-.3-.79-.064-.482-.066-1.13-.066-2.094s.002-1.611.067-2.095c.062-.461.169-.659.3-.789.13-.13.327-.237.788-.3C5.388 8.753 6.036 8.75 7 8.75h.263c.786.001 1.409.002 1.967-.26.557-.26.955-.74 1.458-1.344l.088-.105.264-.317zm2.1-2.19s-.005.002-.011.002l.01-.002zm-.094-.028l-.007-.008s.003.001.007.008zm-.007 14.996l.007-.008c-.004.007-.007.009-.007.008zm.098-.037h-.008.008zm.459-16.348c-.774-.28-1.434.187-1.893.608-.49.448-1.07 1.145-1.776 1.991l-.04.048-.264.317c-.634.761-.813.95-1.03 1.051-.216.101-.475.118-1.466.118h-.179c-.898 0-1.648 0-2.242.08-.628.084-1.195.27-1.65.725-.456.456-.642 1.023-.726 1.65-.08.595-.08 1.345-.08 2.243v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h.179c.99 0 1.25.017 1.466.118.217.102.396.29 1.03 1.051l.264.317.04.048c.706.847 1.286 1.543 1.776 1.991.46.421 1.12.888 1.893.608.773-.28.98-1.061 1.065-1.679.09-.657.089-1.564.089-2.666V7.462c0-1.102 0-2.009-.09-2.666-.083-.618-.291-1.4-1.064-1.68zm3.78 2.467a.75.75 0 011.04-.208C20.436 6.725 21.75 9.207 21.75 12c0 2.793-1.314 5.275-3.334 6.624a.75.75 0 11-.832-1.248C19.15 16.33 20.25 14.336 20.25 12c0-2.335-1.099-4.33-2.666-5.376a.75.75 0 01-.208-1.04zm-1 4a.75.75 0 011.04-.208c.824.55 1.334 1.54 1.334 2.624 0 1.083-.51 2.074-1.334 2.624a.75.75 0 11-.832-1.248c.371-.248.666-.75.666-1.376 0-.626-.295-1.128-.666-1.376a.75.75 0 01-.208-1.04z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgVolumeHigh;
