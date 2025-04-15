
import React, { useState } from 'react';
import { PDVHeader } from '@/components/pdv/PDVHeader';
import { PDVLeftColumn } from '@/components/pdv/PDVLeftColumn';
import { PDVRightColumn } from '@/components/pdv/PDVRightColumn';

const PDV = () => {
  const [barcodeValue, setBarcodeValue] = useState('');
  const [codeValue, setCodeValue] = useState('');
  
  return (
    <div className="flex flex-col h-screen bg-blue-800 p-2 gap-2">
      <PDVHeader />
      <div className="flex flex-1 gap-2">
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
