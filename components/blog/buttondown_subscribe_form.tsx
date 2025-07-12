import React, { useState } from 'react'

export default function ButtondownSubscribeForm() {
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = () => {
    window.open('https://buttondown.com/zhou', 'popupwindow')
  }

  return (
    <div className="text-sm font-mono text-gray-700">
      {!showForm ? (
        <button
          onClick={() => setShowForm(true)}
          className="px-4 py-1.5 bg-azukired-500 hover:bg-azukired-800 text-white rounded text-sm"
        >
          Subscribe w/ Email
        </button>
      ) : (
        <form
          action="https://buttondown.com/api/emails/embed-subscribe/zhou"
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}
          className="flex flex-row items-center space-x-2"
        >
          <input
            type="email"
            name="email"
            id="bd-email"
            required
            placeholder="Enter your email"
            className="w-2/3 p-1.5 border border-gray-300 rounded shadow-sm bg-white"
          />
          <input
            type="submit"
            value="Submit"
            className="w-1/3 px-4 py-1.5 bg-azukired-500 hover:bg-azukired-800 text-white rounded text-sm"
          />
        </form>
      )}
      <p className="text-xs text-gray-500 mt-2">
        You can unsubscribe at any time.
      </p>
    </div>
  )
}
