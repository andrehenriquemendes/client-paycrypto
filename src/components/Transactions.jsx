import React, { useContext } from 'react';

import { TransactionContext } from '../context/TransactionContext';

import { shortenAddress } from '../utils/shortenAddress';
import dummyData from '../utils/dummyData';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, amount }) => {
    
    return (
        <div className="bg-[#f6f6f6] m-4 shadow-md max-w-2xl w-full p-3 rounded-md border">
            <div className="w-full mt-3">
                <div className="w-full mb-6 p-2">
                    <a className="w-1/2" href={`https://ropsten.etherscan.io/address/${addressFrom}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-[#272727] text-base">De: <strong>{shortenAddress(addressFrom)}</strong></p>
                    </a>
                    <a href={`https://ropsten.etherscan.io/address/${addressTo}`} target="_blank" rel="noopener noreferrer">
                        <p className="text-[#272727] text-base">Para: <strong>{shortenAddress(addressTo)}</strong></p>
                    </a>
                    <p className="text-[#272727] text-base">Quantidade: <strong>{amount} ETH</strong></p>
                    <p className="text-[#272727] text-base">{timestamp}</p>
                    {message && (
                        <>
                            <br />
                            <p className="text-black text-base">Mensagem: <strong>{message}</strong></p>    
                        </>
                    )}
                    
                </div>

            </div>
        </div>
    );
}

const Transactions = () => {
    const { currentAccount, transactions } = useContext(TransactionContext)

    return (
        <div className="flex w-full justify-center items-center 2xl:px-20 gradient-bg-transactions">
            <div className="flex flex-col md:p-12 py-12 px-4">
                {currentAccount ? (
                    <h3 className="text-black text-3xl text-center my-2">Últimas transações</h3>
                ) : (
                    <h3 className="text-black text-3xl text-center my-2">Conecte sua Wallet para ver as últimas transações</h3>
                )}

                <div className="flex flex-wrap justify-center items-center mt-10">
                    {transactions.reverse().map((transaction, i) => (
                        <TransactionCard key={i} {...transaction} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Transactions;