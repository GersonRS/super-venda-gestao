
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface PDVLeftColumnProps {
  barcodeValue: string;
  codeValue: string;
  onBarcodeChange: (value: string) => void;
  onCodeChange: (value: string) => void;
}

export function PDVLeftColumn({
  barcodeValue,
  codeValue,
  onBarcodeChange,
  onCodeChange,
}: PDVLeftColumnProps) {
  return (
    <div className="flex flex-col w-56 gap-2">
      {/* Logo */}
      <div className="bg-white rounded-md p-3 flex items-center justify-center">
        <img 
          src="/lovable-uploads/3b557cbb-a5b2-4ce5-ae37-b0509e3e6768.png" 
          alt="Logo do Carrinho" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Barcode Input */}
      <Card className="border-0">
        <CardContent className="p-0">
          <div className="bg-blue-900 text-white p-2 uppercase font-bold">
            Código de Barras
          </div>
          <div className="bg-white p-2">
            <Input 
              value={barcodeValue}
              onChange={(e) => onBarcodeChange(e.target.value)}
              className="border-2 border-gray-300 h-16"
            />
          </div>
        </CardContent>
      </Card>

      {/* Unit Value */}
      <Card className="border-0">
        <CardContent className="p-0">
          <div className="bg-blue-900 text-white p-2 uppercase font-bold">
            Valor Unitário
          </div>
          <div className="bg-white p-4 flex justify-center">
            <p className="text-xl font-bold">R$ 0,00</p>
          </div>
        </CardContent>
      </Card>

      {/* Item Total */}
      <Card className="border-0">
        <CardContent className="p-0">
          <div className="bg-blue-900 text-white p-2 uppercase font-bold">
            Total do Item
          </div>
          <div className="bg-white p-4 flex justify-center">
            <p className="text-xl font-bold">R$ 0,00</p>
          </div>
        </CardContent>
      </Card>

      {/* Code Input */}
      <Card className="border-0">
        <CardContent className="p-0">
          <div className="bg-blue-900 text-white p-2 uppercase font-bold">
            Código
          </div>
          <div className="bg-white p-4">
            <Input 
              value={codeValue}
              onChange={(e) => onCodeChange(e.target.value)}
              className="border-2 border-gray-300 text-center font-bold text-xl h-12"
              placeholder="69883"
            />
          </div>
        </CardContent>
      </Card>

      {/* Keyboard Shortcuts */}
      <Card className="border-0 mt-auto">
        <CardContent className="p-0">
          <div className="bg-blue-100 p-2 text-xs">
            <p>F2 - Código Interno</p>
            <p>F3 - Excluir Item</p>
            <p>F4 - Inserir Quantidade</p>
            <p>F5 - Nova Venda</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
