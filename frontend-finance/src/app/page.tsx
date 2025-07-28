"use client";

import { useRouter } from "next/navigation";
export default function HomePage(){
  const router = useRouter();
  const handleClick = (path:string) => {
    router.push(path);
  }

  return(
    <main className="flex flex-col items-center justify-center min-h-screen gap-4 p-8">
      <button onClick={() => handleClick("/calculate-expense")} className="w-64 bg-blue-600 text-white py-4 rounded-lg shadow hover:bg-blue-700 transition-all text-lg font-medium">
        Calculate Expense
      </button>
      <button onClick={() => handleClick("/plan-budget")} className="w-64 bg-blue-600 text-white py-4 rounded-lg shadow hover:bg-blue-700 transition-all text-lg font-medium">
        Plan Budget
      </button>
      <button onClick={() => handleClick("/summary")} className="w-64 bg-blue-600 text-white py-4 rounded-lg shadow hover:bg-blue-700 transition-all text-lg font-medium">
        3-Month Summary
      </button>
    </main>
  )
}