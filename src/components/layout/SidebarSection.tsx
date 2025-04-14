import React from 'react';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  collapsed?: boolean;
}

export function SidebarSection({ title, children, collapsed }: SidebarSectionProps) {
  return (
    <div className="py-2">
      {!collapsed && (
        <h3 className="mb-2 px-3 text-xs font-semibold text-sidebar-foreground/60 uppercase">
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
}
