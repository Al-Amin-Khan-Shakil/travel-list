import PropTypes from 'prop-types';
import { useState } from 'react';
import Item from './Item';

export default function PackingList({
  items,
  onToggleItem,
  onDeleteItem,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = items;

  if (sortBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.length !== 0 ? (
          sortedItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              onToggleItem={onToggleItem}
              onDeleteItem={onDeleteItem}
            />
          ))
        ) : (
          <p>Enter item details and click &apos;Add&apos; to include them in your packing list.😊</p>
        )}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
      </div>
    </div>
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
