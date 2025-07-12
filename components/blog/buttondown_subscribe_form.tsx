import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
          className="px-4 py-1.5 bg-azukired-500 hover:bg-azukired-800 text-white rounded text-sm transform"
        >
          Subscribe w/ Email
        </button>
      ) : null}

      <AnimatePresence>
        {showForm && (
          <motion.form
            key="subscribe-form"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            action="https://buttondown.com/api/emails/embed-subscribe/zhou"
            method="post"
            target="popupwindow"
            onSubmit={handleSubmit}
            className="flex flex-row items-center space-x-2 mt-2"
          >
            <input
              type="email"
              name="email"
              id="bd-email"
              required
              placeholder="Enter your email"
              className="w-2/3 p-1.5 flex-grow border-2 border-olive rounded bg-white font-mono text-sm focus:border-azukired-500 focus:ring-azukired-500 focus:outline-none transition"
            />
            <input
              type="submit"
              value="Submit"
              className="w-1/3 px-4 py-1.5 bg-azukired-500 hover:bg-azukired-800 text-white rounded text-sm"
            />
          </motion.form>
        )}
      </AnimatePresence>

      <motion.p
        className="text-xs text-gray-500 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        You can unsubscribe at any time.
      </motion.p>
    </div>
  )
}
