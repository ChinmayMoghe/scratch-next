const Svg = ({ name, width = 16, height = 16, ...rest }) => {
  return (
    <svg
      preserveAspectRatio="xMidYMin meet"
      width={width}
      height={height}
      {...rest}
    >
      <use xlinkHref={`/images/icons/sprite.svg#${name}`} />
    </svg>
  );
};

export default Svg;
