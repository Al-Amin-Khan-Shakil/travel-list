import PropTypes from 'prop-types';

export default function Item({ item }) {
  return (
    <li>
      <input type="checkbox" />
      {' '}
      <span>
        {item.quantity}
        {' '}
        {item.description}
      </span>
      {' '}
      <button type="button">❌</button>
    </li>
  );
}

// prop validation
Item.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
