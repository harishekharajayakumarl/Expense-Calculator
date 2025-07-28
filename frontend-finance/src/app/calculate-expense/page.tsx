"use client";

import { useState } from "react";
export default function CalculateExpensePage(){
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();

    setMessage(`Recorded ${amount} for category: ${category}`);
    setAmount("");
    setCategory("");
    };
    return(
        <main className="flex flex-col items-center justify-center min-h-screen p-6 gap-4">
            <h1 className="text-2xl font-bold">Calculate Expense</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                <input 
                    type="number"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="border border-green-300 rounded px-4 py-2"
                    required
                />
                <input 
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="border border-green-300 rounded px-4 py-2"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Save Expense
                </button>
            </form>
            {message && <p className="text-green-600 mt-4">{message}</p>}
        </main>
    );
};