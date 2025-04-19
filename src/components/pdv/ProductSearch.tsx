
import React from 'react';
import { Barcode, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function ProductSearch() {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="barcode" className="text-lg font-semibold flex items-center gap-2 text-white">
          <Barcode className="h-5 w-5" />
          Código de Barras
        </Label>
        <Input
          id="barcode"
          placeholder="Escaneie ou digite o código de barras"
          className="h-14 text-lg bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>

      <div>
        <Label htmlFor="search" className="text-lg font-semibold flex items-center gap-2 text-white">
          <Search className="h-5 w-5" />
          Buscar Produto
        </Label>
        <Input
          id="search"
          placeholder="Digite o nome do produto..."
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
        />
      </div>
    </div>
  );
}
