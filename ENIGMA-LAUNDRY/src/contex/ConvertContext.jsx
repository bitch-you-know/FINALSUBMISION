import React, { createContext } from "react";

export const ConvertToContext = createContext({
    formatRupiah: (number) => {},
    keranjang: [],
    setKeranjang: () => {}
  });

export const ContextProvider =({children})=>{
    const formatRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number)
    }
    return (
        <ConvertToContext.Provider value={{ formatRupiah, keranjangs, setKeranjangs }}>
          {children}
        </ConvertToContext.Provider>
      );
}


