import PropTypes from 'prop-types';

export default function Item({ item }) {
  return (
    <li>
      {item.description}
    </li>
  );
}

// prop validation
Item.propTypes = {
  item: PropTypes.shape(
    {
      description: PropTypes.string.isRequired,
    },
  ).isRequired,
};
