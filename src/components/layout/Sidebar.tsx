import React from 'react';
import { cn } from '@/lib/utils';
import { Settings } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { SidebarItem } from './SidebarItem';
import { SidebarPrincipalSection } from './SidebarPrincipalSection';
import { SidebarCadastrosSection } from './SidebarCadastrosSection';
import { SidebarFinanceiroSection } from './SidebarFinanceiroSection';
import { SidebarEstoqueSection } from './SidebarEstoqueSection';
import { SidebarRelatoriosSection } from './SidebarRelatoriosSection';

interface SidebarProps {
  open: boolean;
  className?: string;
}

export function Sidebar({ open, className }: SidebarProps) {
  const location = useLocation();
  
  return (
    <aside
      className={cn(
        'fixed left-0 top-16 z-20 h-[calc(100vh-4rem)] bg-sidebar w-64 transition-all duration-300 ease-in-out transform',
        open ? 'translate-x-0' : '-translate-x-44 md:translate-x-0 md:w-20',
        className
      )}
    >
      <div className="flex flex-col h-full space-y-2 py-4 px-3">
        <SidebarPrincipalSection collapsed={!open} />
        <SidebarCadastrosSection collapsed={!open} />
        <SidebarFinanceiroSection collapsed={!open} />
        <SidebarEstoqueSection collapsed={!open} />
        <SidebarRelatoriosSection collapsed={!open} />

        <div className="mt-auto">
          <SidebarItem 
            icon={Settings} 
            label="Configurações" 
            to="/configuracoes"
            active={location.pathname === '/configuracoes'} 
            collapsed={!open} 
          />
        </div>
      </div>
    </aside>
  );
}
