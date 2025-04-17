
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Barcode, Hash } from 'lucide-react';

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
    <div className="flex flex-col w-96 gap-4">
      {/* Logo */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center justify-center border border-white/20">
        <img 
          src="/lovable-uploads/3b557cbb-a5b2-4ce5-ae37-b0509e3e6768.png" 
          alt="Logo do Carrinho" 
          className="w-32 h-32 object-contain"
        />
      </div>

      {/* Barcode Input */}
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
            <Barcode className="h-5 w-5" />
            Código de Barras
          </div>
          <div className="p-4">
            <Input 
              value={barcodeValue}
              onChange={(e) => onBarcodeChange(e.target.value)}
              className="border-2 border-white/20 h-16 bg-white/5 text-white text-xl placeholder:text-white/50"
              placeholder="Digite ou escaneie o código"
            />
          </div>
        </CardContent>
      </Card>

      {/* Unit Value */}
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
            Valor Unitário
          </div>
          <div className="p-6 flex justify-center">
            <p className="text-2xl font-bold text-white">R$ 0,00</p>
          </div>
        </CardContent>
      </Card>

      {/* Total Value */}
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold">
            Total do Item
          </div>
          <div className="p-6 flex justify-center">
            <p className="text-2xl font-bold text-white">R$ 0,00</p>
          </div>
        </CardContent>
      </Card>

      {/* Code Input */}
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
            <Hash className="h-5 w-5" />
            Código
          </div>
          <div className="p-4">
            <Input 
              value={codeValue}
              onChange={(e) => onCodeChange(e.target.value)}
              className="border-2 border-white/20 text-center font-bold text-xl h-12 bg-white/5 text-white placeholder:text-white/50"
              placeholder="69883"
            />
          </div>
        </CardContent>
      </Card>

      {/* Keyboard Shortcuts */}
      <Card className="border-0 bg-white/10 backdrop-blur-sm mt-auto">
        <CardContent className="p-4 text-white/80 text-sm space-y-1">
          <p>F2 - Código Interno</p>
          <p>F3 - Excluir Item</p>
          <p>F4 - Inserir Quantidade</p>
          <p>F5 - Nova Venda</p>
        </CardContent>
      </Card>
    </div>
  );
}
