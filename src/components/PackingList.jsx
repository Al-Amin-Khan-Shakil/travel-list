import PropTypes from 'prop-types';
import Item from './Item';

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
}) {
  return (
    <ul>
      {items.length !== 0 ? (
        items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
          />
        ))
      ) : (
        <p>Enter item details and click 'Add' to include them in your packing list.😊</p>
      )}
    </ul>
  );
}

PackingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      packed: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
