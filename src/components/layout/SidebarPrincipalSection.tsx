
import React from 'react';
import { useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingCart, FileText, Clock } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

interface SidebarPrincipalSectionProps {
  collapsed: boolean;
}

export function SidebarPrincipalSection({ collapsed }: SidebarPrincipalSectionProps) {
  const location = useLocation();
  
  return (
    <SidebarSection title="Principal" collapsed={collapsed}>
      <SidebarItem 
        icon={LayoutDashboard} 
        label="Dashboard" 
        to="/" 
        active={location.pathname === '/'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={ShoppingCart} 
        label="PDV" 
        to="/pdv" 
        active={location.pathname === '/pdv'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={FileText} 
        label="Vendas" 
        to="/vendas" 
        active={location.pathname === '/vendas'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={Clock} 
        label="Ordens de Serviço" 
        to="/ordens-servico" 
        active={location.pathname === '/ordens-servico'} 
        collapsed={collapsed} 
      />
    </SidebarSection>
  );
}
