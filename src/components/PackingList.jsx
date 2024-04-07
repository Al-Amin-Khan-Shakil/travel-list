import Item from './Item';

export default function PackingList() {
  const initialItems = [
    {
      id: 1, description: 'Passports', quantity: 2, packed: false,
    },
    {
      id: 2, description: 'Socks', quantity: 12, packed: false,
    },
  ];
  return (
    <ul>
      {initialItems.map((item) => <Item key={item.id} item={item} />)}
    </ul>
  );
}
