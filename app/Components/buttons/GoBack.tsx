'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const GoBack = () => {
  const router = useRouter()
  return (
    <div>
      <button
        onClick={() => router.back()} // Go back to the previous page
        className="mt-8 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
      >
        Go Back
      </button>
    </div>
  )
}

export default GoBack;