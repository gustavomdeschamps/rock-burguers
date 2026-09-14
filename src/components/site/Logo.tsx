type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="brand">
      <img
        className="brand__mark"
        src="/img/marca/logo-rock-burguers.webp"
        alt=""
        width="384"
        height="384"
      />
      {compact ? null : (
        <span className="brand__copy">
          <strong>Rock Burguer&apos;s</strong>
          <small>Blumenau · desde 2009</small>
        </span>
      )}
    </span>
  );
}
