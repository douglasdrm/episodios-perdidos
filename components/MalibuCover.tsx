export function MalibuCover({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`malibu-cover${compact ? ' malibu-cover--compact' : ''}`} aria-hidden="true">
      <div className="cover-sun" />
      <div className="cover-sea" />
      <div className="cover-coast" />
      <div className="cover-house"><i /><span /><span /><span /></div>
      <div className="cover-palm cover-palm--left">✳</div>
      <div className="cover-palm cover-palm--right">✳</div>
      <div className="cover-grain" />
    </div>
  );
}
