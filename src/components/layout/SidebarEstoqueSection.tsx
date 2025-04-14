import React from 'react';
import { useLocation } from 'react-router-dom';
import { Package, Calendar, Clipboard } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

interface SidebarEstoqueSectionProps {
  collapsed: boolean;
}

export function SidebarEstoqueSection({ collapsed }: SidebarEstoqueSectionProps) {
  const location = useLocation();
  
  return (
    <SidebarSection title="Estoque" collapsed={collapsed}>
      <SidebarItem 
        icon={Package} 
        label="Estoque" 
        to="/estoque" 
        active={location.pathname === '/estoque'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={Calendar} 
        label="Validades" 
        to="/validades" 
        active={location.pathname === '/validades'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={Clipboard} 
        label="Inventário" 
        to="/inventario" 
        active={location.pathname === '/inventario'} 
        collapsed={collapsed} 
      />
    </SidebarSection>
  );
}
