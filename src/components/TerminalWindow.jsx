/** macOS-style terminal window frame. */
export default function TerminalWindow({ title, children, className = "", bodyClass = "p-6" }) {
  return (
    <div className={`panel overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
        <span className="h-3 w-3 rounded-full bg-green-500/80" />
        <span className="ml-3 font-mono text-xs text-zinc-500">{title}</span>
      </div>
      <div className={bodyClass}>{children}</div>
    </div>
  );
}
