
import React, { useState } from 'react';
import { PDVHeader } from '@/components/pdv/PDVHeader';
import { PDVLeftColumn } from '@/components/pdv/PDVLeftColumn';
import { PDVRightColumn } from '@/components/pdv/PDVRightColumn';

const PDV = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [codeValue, setCodeValue] = useState('');
  
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)] gap-4 p-4 bg-gradient-to-br from-blue-900 to-blue-950">
      <PDVHeader />
      <div className="flex flex-1 gap-4">
        <PDVLeftColumn
          barcodeValue={barcodeValue}
          codeValue={codeValue}
          onBarcodeChange={setBarcodeValue}
          onCodeChange={setCodeValue}
        />
        <PDVRightColumn />
      </div>
    </div>
  );
};

export default PDV;
