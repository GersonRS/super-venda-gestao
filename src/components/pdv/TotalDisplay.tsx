
import React from 'react';
import { Card } from '@/components/ui/card';

export function TotalDisplay() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="bg-white/10 border-0 p-4">
        <p className="text-white/70 text-sm">Subtotal</p>
        <p className="text-white text-2xl font-bold">R$ 17,80</p>
      </Card>
      
      <Card className="bg-white/10 border-0 p-4">
        <p className="text-white/70 text-sm">Desconto</p>
        <p className="text-white text-2xl font-bold">R$ 0,00</p>
      </Card>
      
      <Card className="bg-white/10 border-0 p-4">
        <p className="text-white/70 text-sm">Total</p>
        <p className="text-white text-2xl font-bold">R$ 17,80</p>
      </Card>
    </div>
  );
}
