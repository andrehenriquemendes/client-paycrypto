import React, { useContext } from 'react';

import { TransactionContext, TransactionProvider } from "../context/TransactionContext";
import { Loader } from ".";


const Input = ({ placeholder, name, type, value, handleChange }) => (
    <div className="w-full flex">
        <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(e) => handleChange(e, name)}
        className="text-[#] my-2 w-full rounded-sm p-2 outline-none bg-transparent border-b text-sm"
        />
    </div>
    
  );

const Form = () => {
    const { connectWallet, currentAccount, formData, handleChange, sendTransaction, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, message } = formData;
    
        e.preventDefault();
    
        if (!addressTo || !amount || !message) return;
    
        sendTransaction();
      };


    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-center justify-between py-12 px-4">
                <h1 className="text-[#272727] font-bold text-2xl">Envie ether com um clique.</h1>
                {!currentAccount && (
                    <button
                        type="submit"
                        onClick={connectWallet}
                        className="text-white flex flex-row justify-center items-center my-5 bg-[#fc440f] p-3 cursor-pointer hover:bg-[#d42e00]"
                    >
                        <p className="text-white text-base font-semibold">Conectar Wallet</p>
                    </button>
                )}



                <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center">
                    <Input placeholder="Endereço destino" name="addressTo" type="text" handleChange={handleChange} />
                    <Input placeholder="Quantidade (ETH)" name="amount" type="number" handleChange={handleChange} />
                    <Input placeholder="Digite uma mensagem" name="message" type="text" handleChange={handleChange} />
                    <div className="h-[1px] w-full bg-gray-400 my-2" />
                    
                    {isLoading ? (
                    <Loader />
                    ) : (
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="text-white w-full mt-2 border-[1px] p-2 bg-[#1F01B9] border-[#3d4f7c] hover:bg-[#192c5d] rounded-full cursor-pointer"
                    >
                        Enviar Agora
                    </button>)}
                </div>
            </div>
        </div>
    );
}

export default Form;