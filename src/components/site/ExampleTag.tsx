/** Signale un contenu que le commerçant doit encore fournir. */
export function ExampleTag({ label = "À compléter" }: { label?: string }) {
  return <span className="example-tag">{label}</span>;
}
