// components/BackButton.js
import { useRouter } from 'next/router';

export default function BackButton({ label = 'Volver', className = '' }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className={`p-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition ${className}`}
    >
      {label}
    </button>
  );
}
