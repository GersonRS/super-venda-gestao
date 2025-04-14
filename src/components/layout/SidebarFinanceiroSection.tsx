import React from 'react';
import { useLocation } from 'react-router-dom';
import { CreditCard, DollarSign, BarChart3 } from 'lucide-react';
import { SidebarSection } from './SidebarSection';
import { SidebarItem } from './SidebarItem';

interface SidebarFinanceiroSectionProps {
  collapsed: boolean;
}

export function SidebarFinanceiroSection({ collapsed }: SidebarFinanceiroSectionProps) {
  const location = useLocation();
  
  return (
    <SidebarSection title="Financeiro" collapsed={collapsed}>
      <SidebarItem 
        icon={CreditCard} 
        label="Caixa" 
        to="/caixa" 
        active={location.pathname === '/caixa'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={DollarSign} 
        label="Contas a Pagar" 
        to="/contas-pagar" 
        active={location.pathname === '/contas-pagar'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={DollarSign} 
        label="Contas a Receber" 
        to="/contas-receber" 
        active={location.pathname === '/contas-receber'} 
        collapsed={collapsed} 
      />
      <SidebarItem 
        icon={BarChart3} 
        label="Relatórios" 
        to="/relatorios-financeiros" 
        active={location.pathname === '/relatorios-financeiros'} 
        collapsed={collapsed} 
      />
    </SidebarSection>
  );
}
