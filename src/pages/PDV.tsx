
import React, { useState } from 'react';
import { PDVHeader } from '@/components/pdv/PDVHeader';
import { SearchProduct } from '@/components/pdv/SearchProduct';
import { ProductCart } from '@/components/pdv/ProductCart';
import { Separator } from '@/components/ui/separator';
import { PDVTotals } from '@/components/pdv/PDVTotals';
import { PDVActions } from '@/components/pdv/PDVActions';

const PDV = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] gap-4 p-6 bg-gradient 
      bg-gradient-to-br from-blue-950 to-indigo-950">
      <PDVHeader />
      
      <div className="flex gap-6 flex-1">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-[460px]">
          <SearchProduct 
            barcodeValue={barcodeValue}
            onBarcodeChange={setBarcodeValue}
            searchValue={searchValue}
            onSearchChange={setSearchValue}
          />
          <PDVActions />
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-4">
          <ProductCart />
          <Separator className="bg-white/10" />
          <PDVTotals />
        </div>
      </div>
    </div>
  );
};

export default PDV;
