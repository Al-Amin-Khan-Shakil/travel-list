import PropTypes from 'prop-types';
import Item from './Item';

export default function PackingList({ items }) {
  return (
    <ul>
      {items.length !== 0 ? (
        items.map((item) => <Item key={item.id} item={item} />)
      ) : (
        <p>Add Items you want to pack.😊</p>
      )}
    </ul>
  );
}

PackingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
