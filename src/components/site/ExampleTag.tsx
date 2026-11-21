export function ExampleTag({ label = "Exemple à remplacer" }: { label?: string }) {
  return <span className="example-tag">◇ {label}</span>;
}
