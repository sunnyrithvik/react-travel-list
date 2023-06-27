export function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start adding some items to your list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you got everything ready to go ✈️"
          : `you have ${numItems} items and packed ${numPacked} items (${percentage}%)`}
      </em>
    </footer>
  );
}
