import React from 'react';
import { useLocation } from 'react-router-dom';
import { BarChart3 } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

interface SidebarRelatoriosSectionProps {
  collapsed: boolean;
}

export function SidebarRelatoriosSection({ collapsed }: SidebarRelatoriosSectionProps) {
  const location = useLocation();
  
  return (
    <SidebarSection title="Relatórios" collapsed={collapsed}>
      <SidebarItem 
        icon={BarChart3} 
        label="Vendas" 
        to="/relatorios-vendas" 
        active={location.pathname === '/relatorios-vendas'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={BarChart3} 
        label="Produtos" 
        to="/relatorios-produtos" 
        active={location.pathname === '/relatorios-produtos'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={BarChart3} 
        label="Clientes" 
        to="/relatorios-clientes" 
        active={location.pathname === '/relatorios-clientes'} 
        collapsed={collapsed} 
      />
    </SidebarSection>
  );
}
