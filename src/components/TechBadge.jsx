export default function TechBadge({
  name,
}) {
  return (
    <span
      className="
      rounded-full
      border
      border-blue-500/20
      bg-blue-500/10
      px-4
      py-2
      text-sm
      "
    >
      {name}
    </span>
  );
}