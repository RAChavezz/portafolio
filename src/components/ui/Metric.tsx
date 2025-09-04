export default function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-radius-md border border-border bg-card p-4 shadow-elevation-1">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-muted">{label}</div>
    </div>
  );
}


