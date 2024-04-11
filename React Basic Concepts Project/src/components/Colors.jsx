import PropTypes from "prop-types";
import { Color } from "./Color";

Colors.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })
  ),
};

export function Colors({ colors, title }) {
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {colors.map((color) => (
          <Color key={color.id} color={color} />
        ))}
      </ul>
    </>
  );
}
