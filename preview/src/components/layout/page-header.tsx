interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between px-6 py-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-fg-primary">
          {title}
        </h1>
        {description && (
          <p className="mt-1 text-sm text-fg-secondary">{description}</p>
        )}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </div>
  );
}
