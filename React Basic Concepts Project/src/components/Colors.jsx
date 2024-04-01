export function Colors({ colors }) {
  return (
    <>
      <h3>Look, more colors 8)))</h3>
      <ul>
        {colors.map((color) => (
          <li key={color.id}>{color.name}</li>
        ))}
      </ul>
    </>
  );
}
