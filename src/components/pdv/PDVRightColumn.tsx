
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProductList } from './ProductList';

export function PDVRightColumn() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      {/* Product List */}
      <Card className="border-0 flex-1 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
            Lista de Produtos
          </div>
          <div>
            <ProductList />
          </div>
        </CardContent>
      </Card>

      {/* Subtotal */}
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
            Subtotal
          </div>
          <div className="p-6 flex justify-end">
            <p className="text-4xl font-bold text-white">R$ 110,45</p>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row with Total and Change */}
      <div className="flex gap-4">
        {/* Left Bottom - Function Keys */}
        <Card className="border-0 flex-1 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-4 grid grid-cols-3 gap-4 text-sm text-white/80">
            <div className="space-y-1">
              <p>F2 - Código Interno</p>
              <p>F3 - Excluir Item</p>
              <p>F4 - Inserir Quantidade</p>
            </div>
            <div className="space-y-1">
              <p>F7 - Pesquisar Venda</p>
              <p>F8 - Pesquisar Produto</p>
              <p>F9 - Alterar Venda</p>
            </div>
            <div className="space-y-1">
              <p>Ctrl+O - CPF</p>
              <p>Ctrl+P - Preço Produto</p>
              <p>Ctrl+R - Contas Receber</p>
            </div>
            <div className="space-y-1">
              <p>F5 - Nova Venda</p>
            </div>
            <div className="space-y-1">
              <p>F10 - Finalizar</p>
              <p>F11 - Excluir Venda</p>
            </div>
            <div className="space-y-1">
              <p>P - Imprimir</p>
              <p>Esc - Sair</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Received */}
        <Card className="border-0 w-64 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
              Total Recebido
            </div>
            <div className="p-6 flex justify-center">
              <p className="text-2xl font-bold text-white">R$ 110,45</p>
            </div>
          </CardContent>
        </Card>

        {/* Change */}
        <Card className="border-0 w-64 bg-white/10 backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
              Troco
            </div>
            <div className="p-6 flex justify-center">
              <p className="text-2xl font-bold text-white">R$ 0,00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
