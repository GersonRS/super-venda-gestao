
import React, { useState, useEffect } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { session, loading } = useAuth();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Se ainda estiver carregando, não mostra nada
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Se não estiver autenticado, redireciona para a página de login
  if (!session) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar toggleSidebar={toggleSidebar} className="fixed top-0 w-full z-10" />
      <div className="flex flex-1 overflow-hidden pt-16">
        <Sidebar open={sidebarOpen} className="overflow-y-auto" />
        <main
          className={cn(
            "flex-1 overflow-auto transition-all duration-300 ease-in-out p-4 md:p-6",
            sidebarOpen ? 'md:ml-64' : 'md:ml-20'
          )}
        >
          <div className="container mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
