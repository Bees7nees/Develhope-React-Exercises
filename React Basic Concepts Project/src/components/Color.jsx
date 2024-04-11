import PropTypes from "prop-types";

Color.propTypes = {
  color: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
};

export function Color({ color }) {
  return <li>{color.name}</li>;
}
