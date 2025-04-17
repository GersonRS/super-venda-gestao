
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Keyboard } from 'lucide-react';

export function PDVActions() {
  return (
    <Card className="border-0 bg-white/10 backdrop-blur-sm mt-auto">
      <CardContent className="p-0">
        <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
          <Keyboard className="h-5 w-5" />
          Atalhos
        </div>
        <div className="p-4 grid grid-cols-2 gap-4">
          <div className="space-y-2 text-white/80">
            <p>F2 - Pesquisar Produto</p>
            <p>F3 - Excluir Item</p>
            <p>F4 - Quantidade</p>
            <p>F5 - Nova Venda</p>
          </div>
          <div className="space-y-2 text-white/80">
            <p>F8 - Desconto</p>
            <p>F9 - Cancelar Venda</p>
            <p>F10 - Finalizar</p>
            <p>ESC - Sair</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
