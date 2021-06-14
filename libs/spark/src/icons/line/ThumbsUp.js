import * as React from 'react';

function SvgThumbsUp(props) {
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
        d="M13.11 3.014a.772.772 0 011.291.813l-2.09 4.878A.75.75 0 0013 9.75h2.763c1.226 0 2.063.002 2.673.09.59.086.81.233.939.401.128.168.212.42.14 1.012-.076.611-.294 1.419-.617 2.602l-.818 3c-.198.726-.33 1.207-.474 1.563-.136.336-.252.482-.375.575-.122.094-.293.168-.654.21-.38.046-.88.047-1.632.047H10c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3-.13-.13-.237-.327-.3-.788-.064-.483-.066-1.131-.066-2.095v-4.497c0-.798.011-1.008.08-1.191.069-.183.198-.348.724-.95l5.556-6.348zm.58-1.764c-.654 0-1.278.283-1.71.776L6.426 8.375l-.072.082c-.419.479-.75.857-.927 1.327-.177.47-.177.974-.176 1.61v4.657c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h5.04c.698 0 1.286 0 1.765-.056.509-.06.974-.192 1.389-.509.415-.316.663-.73.855-1.206.18-.447.335-1.014.519-1.687l.011-.042.819-3 .015-.058c.303-1.11.552-2.024.642-2.757.094-.764.036-1.486-.436-2.104-.472-.619-1.154-.864-1.916-.975-.73-.106-1.677-.106-2.828-.106h-1.686l1.643-3.832a2.273 2.273 0 00-2.09-3.168zM3.75 10a.75.75 0 00-1.5 0v10a.75.75 0 001.5 0V10z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default SvgThumbsUp;
