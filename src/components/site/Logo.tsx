type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <span className="brand">
      <img
        className="brand__mark"
        src="/img/marca/logo-rock-burguers-oficial.webp"
        alt="Rock Burguer's"
        width="1100"
        height="1100"
      />
      {compact ? null : (
        <span className="brand__copy">
          <small>Hamburgueria em Blumenau · desde 2009</small>
        </span>
      )}
    </span>
  );
}
