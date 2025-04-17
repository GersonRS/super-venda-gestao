
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CircleDollarSign, Receipt, ArrowRightLeft } from 'lucide-react';

export function PDVTotals() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
            <CircleDollarSign className="h-5 w-5" />
            Total
          </div>
          <div className="p-6 flex justify-center">
            <p className="text-3xl font-bold text-white">R$ 33,40</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Recebido
          </div>
          <div className="p-6 flex justify-center">
            <p className="text-3xl font-bold text-white">R$ 50,00</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0 bg-white/10 backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="bg-blue-800/50 text-white p-4 rounded-t-xl font-bold flex items-center gap-2">
            <ArrowRightLeft className="h-5 w-5" />
            Troco
          </div>
          <div className="p-6 flex justify-center">
            <p className="text-3xl font-bold text-white">R$ 16,60</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
