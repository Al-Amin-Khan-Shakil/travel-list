import PropTypes from 'prop-types';

export default function Item({
  item,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => onToggleItem(item.id)}
        checked={item.packed}
      />
      {' '}
      <span
        style={item.packed ? { textDecoration: 'line-through' } : {}}
      >
        {item.quantity}
        {' '}
        {item.description}
      </span>
      {' '}
      <button type="button" onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

// prop validation
Item.propTypes = {
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    packed: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
