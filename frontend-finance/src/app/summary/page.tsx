export default function SummaryPage() {
  // Example static summary. Replace with API later.
  const summary = {
    totalBudget: 42000,
    totalExpense: 39800,
    totalSavings: 2200,
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">3-Month Summary</h1>
      <div className="bg-gray-100 p-6 rounded shadow max-w-sm w-full text-center">
        <p><strong>Total Budget:</strong> ₹{summary.totalBudget}</p>
        <p><strong>Total Expense:</strong> ₹{summary.totalExpense}</p>
        <p><strong>Total Savings:</strong> ₹{summary.totalSavings}</p>
      </div>
    </main>
  );
};