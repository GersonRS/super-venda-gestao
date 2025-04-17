
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Barcode, Search } from 'lucide-react';

interface SearchProductProps {
  barcodeValue: string;
  searchValue: string;
  onBarcodeChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export function SearchProduct({
  barcodeValue,
  searchValue,
  onBarcodeChange,
  onSearchChange,
}: SearchProductProps) {
  return (
    <div className="space-y-4">
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
              placeholder="Digite ou escaneie o código de barras"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
            <Search className="h-5 w-5" />
            Buscar Produto
          </div>
          <div className="p-4">
            <Input 
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="border-2 border-white/20 bg-white/5 text-white placeholder:text-white/50"
              placeholder="Pesquisar produto por nome..."
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
