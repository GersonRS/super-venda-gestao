
import React from 'react';
import { Link } from 'react-router-dom';
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
  return (
    <aside
      className={cn(
        'fixed left-0 top-16 z-20 h-[calc(100vh-4rem)] bg-sidebar w-64 transition-all duration-300 ease-in-out transform',
        open ? 'translate-x-0' : '-translate-x-44 md:translate-x-0 md:w-20'
      )}
    >
      <div className="flex flex-col h-full space-y-2 py-4 px-3">
        <SidebarSection title="Principal" collapsed={!open}>
          <SidebarItem icon={LayoutDashboard} label="Dashboard" to="/" active />
          <SidebarItem icon={ShoppingCart} label="PDV" to="/pdv" />
          <SidebarItem icon={FileText} label="Vendas" to="/vendas" />
          <SidebarItem icon={Clock} label="Ordens de Serviço" to="/ordens-servico" />
        </SidebarSection>

        <SidebarSection title="Cadastros" collapsed={!open}>
          <SidebarItem icon={Store} label="Empresa" to="/empresa" />
          <SidebarItem icon={Users} label="Clientes" to="/clientes" />
          <SidebarItem icon={Truck} label="Fornecedores" to="/fornecedores" />
          <SidebarItem icon={Package} label="Produtos" to="/produtos" />
        </SidebarSection>

        <SidebarSection title="Financeiro" collapsed={!open}>
          <SidebarItem icon={CreditCard} label="Caixa" to="/caixa" />
          <SidebarItem icon={DollarSign} label="Contas a Pagar" to="/contas-pagar" />
          <SidebarItem icon={DollarSign} label="Contas a Receber" to="/contas-receber" />
          <SidebarItem icon={BarChart3} label="Relatórios" to="/relatorios-financeiros" />
        </SidebarSection>

        <SidebarSection title="Estoque" collapsed={!open}>
          <SidebarItem icon={Package} label="Estoque" to="/estoque" />
          <SidebarItem icon={Calendar} label="Validades" to="/validades" />
          <SidebarItem icon={Clipboard} label="Inventário" to="/inventario" />
        </SidebarSection>

        <SidebarSection title="Relatórios" collapsed={!open}>
          <SidebarItem icon={BarChart3} label="Vendas" to="/relatorios-vendas" />
          <SidebarItem icon={BarChart3} label="Produtos" to="/relatorios-produtos" />
          <SidebarItem icon={BarChart3} label="Clientes" to="/relatorios-clientes" />
        </SidebarSection>

        <div className="mt-auto">
          <SidebarItem icon={Settings} label="Configurações" to="/configuracoes" />
        </div>
      </div>
    </aside>
  );
}
