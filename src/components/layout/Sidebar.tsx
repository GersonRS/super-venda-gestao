
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  BarChart3,
  Clipboard,
  CreditCard,
  Home,
  LayoutDashboard,
  Package,
  ShoppingCart,
  Store,
  Users,
  Wrench,
  FileText,
  Calendar,
  DollarSign,
  Settings,
  Truck,
  Clock,
} from 'lucide-react';

interface SidebarProps {
  open: boolean;
}

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
  collapsed?: boolean;
}

function SidebarItem({ icon: Icon, label, to, active, collapsed }: SidebarItemProps) {
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

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  collapsed?: boolean;
}

function SidebarSection({ title, children, collapsed }: SidebarSectionProps) {
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

export function Sidebar({ open }: SidebarProps) {
  const location = useLocation();
  
  return (
    <aside
      className={cn(
        'fixed left-0 top-16 z-20 h-[calc(100vh-4rem)] bg-sidebar w-64 transition-all duration-300 ease-in-out transform',
        open ? 'translate-x-0' : '-translate-x-44 md:translate-x-0 md:w-20'
      )}
    >
      <div className="flex flex-col h-full space-y-2 py-4 px-3">
        <SidebarSection title="Principal" collapsed={!open}>
          <SidebarItem 
            icon={LayoutDashboard} 
            label="Dashboard" 
            to="/" 
            active={location.pathname === '/'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={ShoppingCart} 
            label="PDV" 
            to="/pdv" 
            active={location.pathname === '/pdv'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={FileText} 
            label="Vendas" 
            to="/vendas" 
            active={location.pathname === '/vendas'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={Clock} 
            label="Ordens de Serviço" 
            to="/ordens-servico" 
            active={location.pathname === '/ordens-servico'} 
            collapsed={!open} 
          />
        </SidebarSection>

        <SidebarSection title="Cadastros" collapsed={!open}>
          <SidebarItem 
            icon={Store} 
            label="Empresa" 
            to="/empresa" 
            active={location.pathname === '/empresa'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={Users} 
            label="Clientes" 
            to="/clientes" 
            active={location.pathname === '/clientes'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={Truck} 
            label="Fornecedores" 
            to="/fornecedores" 
            active={location.pathname === '/fornecedores'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={Package} 
            label="Produtos" 
            to="/produtos" 
            active={location.pathname === '/produtos'} 
            collapsed={!open} 
          />
        </SidebarSection>

        <SidebarSection title="Financeiro" collapsed={!open}>
          <SidebarItem 
            icon={CreditCard} 
            label="Caixa" 
            to="/caixa" 
            active={location.pathname === '/caixa'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={DollarSign} 
            label="Contas a Pagar" 
            to="/contas-pagar" 
            active={location.pathname === '/contas-pagar'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={DollarSign} 
            label="Contas a Receber" 
            to="/contas-receber" 
            active={location.pathname === '/contas-receber'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={BarChart3} 
            label="Relatórios" 
            to="/relatorios-financeiros" 
            active={location.pathname === '/relatorios-financeiros'} 
            collapsed={!open} 
          />
        </SidebarSection>

        <SidebarSection title="Estoque" collapsed={!open}>
          <SidebarItem 
            icon={Package} 
            label="Estoque" 
            to="/estoque" 
            active={location.pathname === '/estoque'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={Calendar} 
            label="Validades" 
            to="/validades" 
            active={location.pathname === '/validades'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={Clipboard} 
            label="Inventário" 
            to="/inventario" 
            active={location.pathname === '/inventario'} 
            collapsed={!open} 
          />
        </SidebarSection>

        <SidebarSection title="Relatórios" collapsed={!open}>
          <SidebarItem 
            icon={BarChart3} 
            label="Vendas" 
            to="/relatorios-vendas" 
            active={location.pathname === '/relatorios-vendas'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={BarChart3} 
            label="Produtos" 
            to="/relatorios-produtos" 
            active={location.pathname === '/relatorios-produtos'} 
            collapsed={!open} 
          />
          <SidebarItem 
            icon={BarChart3} 
            label="Clientes" 
            to="/relatorios-clientes" 
            active={location.pathname === '/relatorios-clientes'} 
            collapsed={!open} 
          />
        </SidebarSection>

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
