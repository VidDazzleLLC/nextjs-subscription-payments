'use client';

import { useState } from 'react';

export default function Radar() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);    const res = await fetch('/api/checkout', { method: 'POST', body: formData });
    if (res.redirected) window.location.href = res.url;
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Buyer Radar</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="keywords" placeholder="e.g. iPhone 14 Pro" required className=" />
        <input name="max_price" type="number" placeholder="Max price" required className=" />
        <input name="contact" type="email" placeholder="email" required className=" />
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white p-3 rounded">
          {loading ? 'Processing...' : 'Pay $4.99 & Activate'}
        </button>
      </form>
    </div>
  );
}
