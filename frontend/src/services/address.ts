import {Transaction} from '@/types/wallet.interface';
const prefix = 'http://localhost:3002/address';

export const getAddressBalance = async (address: string): Promise<number> => {
    try {
        const res = await fetch(`${prefix}/balance/${address}`);
        if (!res.ok) {
            throw new Error('Failed to fetch address balance');
        }
        const data = await res.json();
        console.log(data);
        return data.balance;
    } catch (error) {
        console.error('Error fetching address balance:', error);
        throw error;
    }
};

export const getAddressTransactions = async (address: string): Promise<Transaction[]> => {
    try {
        const res = await fetch(`${prefix}/transactions/${address}`);
        if (!res.ok) {
            throw new Error('Failed to fetch address transactions');
        }
        const data = await res.json();
        console.log(data);
        return data.transfers;
    } catch (error) {
        console.error('Error fetching address transactions:', error);
        throw error;
    }
};
