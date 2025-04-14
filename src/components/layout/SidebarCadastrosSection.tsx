import React from 'react';
import { useLocation } from 'react-router-dom';
import { Store, Users, Truck, Package } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

interface SidebarCadastrosSectionProps {
  collapsed: boolean;
}

export function SidebarCadastrosSection({ collapsed }: SidebarCadastrosSectionProps) {
  const location = useLocation();
  
  return (
    <SidebarSection title="Cadastros" collapsed={collapsed}>
      <SidebarItem 
        icon={Store} 
        label="Empresa" 
        to="/empresa" 
        active={location.pathname === '/empresa'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={Users} 
        label="Clientes" 
        to="/clientes" 
        active={location.pathname === '/clientes'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={Truck} 
        label="Fornecedores" 
        to="/fornecedores" 
        active={location.pathname === '/fornecedores'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={Package} 
        label="Produtos" 
        to="/produtos" 
        active={location.pathname === '/produtos'} 
        collapsed={collapsed} 
      />
    </SidebarSection>
  );
}
