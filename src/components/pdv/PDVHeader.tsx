
import React from 'react';
import { Badge } from '@/components/ui/badge';

export function PDVHeader() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">CAIXA ABERTO</h1>
        <div className="flex gap-4">
          <Badge variant="success" className="text-lg px-4 py-1">Operador: João</Badge>
          <Badge variant="warning" className="text-lg px-4 py-1">Caixa: 001</Badge>
        </div>
      </div>
    </div>
  );
}
