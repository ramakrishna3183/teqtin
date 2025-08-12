"use client"
import React, { useState } from 'react'
import Navbar from '../navbar/navabr'

const EmailMarketingPage = () => {
  const [recipientType, setRecipientType] = useState('individual')
  const [toEmail, setToEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSendEmail = () => {
    // Handle email sending functionality
    console.log('Sending email:', {
      recipientType,
      toEmail,
      subject,
      message
    })
    
    // Here you would typically make an API call to send the email
    alert('Email sent successfully!')
    
    // Clear form after sending
    setToEmail('')
    setSubject('')
    setMessage('')
  }

  return (
    <Navbar>
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-8">
            {/* Title */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 underline">
              Compose Email Here:
            </h1>

            {/* Recipient Type Selection */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setRecipientType('individual')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  recipientType === 'individual'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-800 border border-gray-300 shadow-sm hover:bg-gray-50'
                }`}
              >
                Individual
              </button>
              <button
                onClick={() => setRecipientType('group')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                  recipientType === 'group'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-gray-800 border border-gray-300 shadow-sm hover:bg-gray-50'
                }`}
              >
                Group
              </button>
            </div>

            {/* Email Form */}
            <form onSubmit={(e) => { e.preventDefault(); handleSendEmail(); }} className="space-y-6">
              {/* To Field */}
              <div>
                <label htmlFor="toEmail" className="block text-sm font-bold text-gray-800 mb-2">
                  To:
                </label>
                <input
                  type="email"
                  id="toEmail"
                  value={toEmail}
                  onChange={(e) => setToEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-gray-800 mb-2">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter email subject"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-800 mb-2">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your message here..."
                  rows={8}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

export default EmailMarketingPage
