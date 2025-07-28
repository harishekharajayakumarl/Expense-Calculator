"use client";
import { useState } from "react";

export default function PlanBudgetPage() {
    const [budget, setBudget] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Budget of ₹${budget} set!`);
        setBudget("");
    };

    return (
        <main className="flex flex-col items-center justify-center min-h-screen p-6 gap-4">
            <h1 className="text-2xl font-bold">Plan Budget</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">
                <input
                    type="number"
                    placeholder="Enter your budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="border border-green-300 rounded px-4 py-2"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Set Budget
                </button>
            </form>
        </main>
    );
};