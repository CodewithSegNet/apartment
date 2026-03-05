// src/components/Toast.jsx
// Lightweight toast notification — uses existing Tailwind + brand color.
// Usage:
//   import { useToast, ToastContainer } from './Toast';
//   const { showToast } = useToast();
//   showToast('Saved!');                    // success (default)
//   showToast('Something went wrong', 'error');

import React, { createContext, useCallback, useContext, useState } from 'react';

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = 'success') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used inside <ToastProvider>');
  return ctx;
};

function ToastContainer({ toasts }) {
  if (!toasts.length) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`px-5 py-3.5 rounded-2xl shadow-lg text-white text-sm font-medium animate-fade-in pointer-events-auto
            ${t.type === 'error' ? 'bg-red-500' : 'bg-[#FF7D01]'}`}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}