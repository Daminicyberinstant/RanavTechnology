'use client';

import React from 'react';

export default function ApplicationModal({ job, onClose, children }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center z-50 sm:p-4">
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-gray-600 hover:text-gray-900"
          aria-label="Close modal"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
