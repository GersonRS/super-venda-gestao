
import React from 'react';
import { ProductSearch } from '@/components/pdv/ProductSearch';
import { CartTable } from '@/components/pdv/CartTable';
import { TotalDisplay } from '@/components/pdv/TotalDisplay';
import { Shortcuts } from '@/components/pdv/Shortcuts';

export function PDV() {
  return (
    <div className="h-[calc(100vh-4rem)] flex gap-4 p-4 bg-gradient-to-br from-blue-950 to-indigo-950">
      {/* Coluna Esquerda */}
      <div className="w-[400px] flex flex-col gap-4">
        <ProductSearch />
        <Shortcuts />
      </div>

      {/* Coluna Direita */}
      <div className="flex-1 flex flex-col gap-4">
        <CartTable />
        <TotalDisplay />
      </div>
    </div>
  );
}

export default PDV;
