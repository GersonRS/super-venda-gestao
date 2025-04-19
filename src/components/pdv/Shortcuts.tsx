
import React from 'react';
import { Card } from '@/components/ui/card';

export function Shortcuts() {
  return (
    <Card className="bg-white/10 border-0 p-4">
      <div className="grid grid-cols-3 gap-4 text-sm text-white/70">
        <div className="space-y-2">
          <p>F2 - Pesquisar</p>
          <p>F3 - Desconto</p>
          <p>F4 - Quantidade</p>
        </div>
        <div className="space-y-2">
          <p>F5 - Nova Venda</p>
          <p>F6 - Cancelar Item</p>
          <p>F7 - CPF na Nota</p>
        </div>
        <div className="space-y-2">
          <p>F8 - Pagamento</p>
          <p>F9 - Cancelar Venda</p>
          <p>ESC - Sair</p>
        </div>
      </div>
    </Card>
  );
}
