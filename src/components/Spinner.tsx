import React from 'react'

const Spinner = () => {
  return (
    <div className="flex flex-row space-x-4">
        <div className="w-12 h-12 rounded-full animate-spin
            border border-solid border-theme-blue border-t-transparent">
        </div>
    </div>
  )
}

export default Spinner