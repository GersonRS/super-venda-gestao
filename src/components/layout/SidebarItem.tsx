
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
  collapsed?: boolean;
}

export function SidebarItem({ icon: Icon, label, to, active, collapsed }: SidebarItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        'sidebar-item',
        active && 'active',
        collapsed ? 'justify-center' : ''
      )}
    >
      <Icon className="h-5 w-5" />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}
