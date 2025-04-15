
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ProductList } from './ProductList';

export function PDVRightColumn() {
  return (
    <div className="flex flex-col flex-1 gap-2">
      {/* Product List */}
      <Card className="border-0 flex-1">
        <CardContent className="p-0">
          <div className="bg-blue-900 text-white p-2 uppercase font-bold">
            Lista de Produtos
          </div>
          <div className="bg-white">
            <ProductList />
          </div>
        </CardContent>
      </Card>

      {/* Subtotal */}
      <Card className="border-0">
        <CardContent className="p-0">
          <div className="bg-blue-900 text-white p-2 uppercase font-bold">
            Subtotal
          </div>
          <div className="bg-white p-4 flex justify-end">
            <p className="text-4xl font-bold text-blue-900">110,45</p>
          </div>
        </CardContent>
      </Card>

      {/* Bottom Row with Total and Change */}
      <div className="flex gap-2">
        {/* Left Bottom - Function Keys */}
        <Card className="border-0 flex-1">
          <CardContent className="p-2 grid grid-cols-3 gap-2 bg-blue-100 text-xs">
            <div>
              <p>F2 - Código Interno</p>
              <p>F3 - Excluir Item</p>
              <p>F4 - Inserir Quantidade</p>
            </div>
            <div>
              <p>F7 - Pesquisar Venda</p>
              <p>F8 - Pesquisar Produto</p>
              <p>F9 - Alterar Venda</p>
            </div>
            <div>
              <p>Ctrl+O - CPF</p>
              <p>Ctrl+P - Preço Produto</p>
              <p>Ctrl+R - Contas Receber</p>
            </div>
            <div>
              <p>F5 - Nova Venda</p>
            </div>
            <div>
              <p>F10 - Finalizar</p>
              <p>F11 - Excluir Venda</p>
            </div>
            <div>
              <p>P - Imprimir</p>
              <p>Esc - Sair</p>
            </div>
          </CardContent>
        </Card>

        {/* Total Received */}
        <Card className="border-0 w-52">
          <CardContent className="p-0">
            <div className="bg-blue-900 text-white p-2 uppercase font-bold">
              Total Recebido
            </div>
            <div className="bg-white p-4 flex justify-center">
              <p className="text-2xl font-bold">R$ 110,45</p>
            </div>
          </CardContent>
        </Card>

        {/* Change */}
        <Card className="border-0 w-52">
          <CardContent className="p-0">
            <div className="bg-blue-900 text-white p-2 uppercase font-bold">
              Troco
            </div>
            <div className="bg-white p-4 flex justify-center">
              <p className="text-2xl font-bold">R$ 0,00</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
