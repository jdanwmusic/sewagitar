// Shared breadcrumb component — reuses existing typography system.
export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-slate-400 ${className}`}>
      <ol className="flex items-center gap-1 flex-wrap">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1">
            {idx > 0 && (
              <span className="mx-1 text-slate-300" aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <a
                href={item.href}
                className="hover:text-ocean-deep transition-colors"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-slate-600 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
