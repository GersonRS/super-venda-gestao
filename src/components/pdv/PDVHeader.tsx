
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { User, CreditCard } from 'lucide-react';

export function PDVHeader() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold text-white">PDV</h1>
          <Badge variant="success" className="text-lg px-4 py-1">
            <User className="mr-2 h-4 w-4" />
            Operador: João
          </Badge>
        </div>
        <div className="flex gap-4">
          <Badge variant="warning" className="text-lg px-4 py-1">
            <CreditCard className="mr-2 h-4 w-4" />
            Caixa: 001
          </Badge>
        </div>
      </div>
    </div>
  );
}
