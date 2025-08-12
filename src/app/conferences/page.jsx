
"use client"
import React from 'react'
import Navbar from '../navbar/navabr'

const Toolbar = () => (
  <div className="flex items-center justify-between mb-6">
    <div className="flex items-center gap-6">
      <button className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 text-gray-800 hover:shadow">
        <span className="text-blue-600 text-xl leading-none">+</span>
        <span className="font-semibold">Add Conferences</span>
      </button>
      <button className="bg-white border border-gray-200 shadow-sm rounded-lg px-4 py-2 text-gray-800 font-semibold hover:shadow">Schedule</button>
    </div>
    <div className="flex items-center gap-3 text-gray-600">
      <button title="List view" className="p-2 bg-white border border-gray-200 rounded hover:shadow">📋</button>
      <button title="Calendar view" className="p-2 bg-white border border-gray-200 rounded hover:shadow">📅</button>
      <button title="Grid view" className="p-2 bg-white border border-gray-200 rounded hover:shadow">🔲</button>
    </div>
  </div>
)

const ActionIcons = () => (
  <div className="flex items-center gap-2">
    <button title="View" className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">👁️</button>
    <button title="Edit" className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">✏️</button>
    <button title="Delete" className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center">🗑️</button>
  </div>
)

const ConferencesTable = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
    <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Upcoming Conference List</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="py-3">Date</th>
            <th className="py-3">Conference Name</th>
            <th className="py-3">Venue</th>
            <th className="py-3">Action</th>
            <th className="py-3"></th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="py-3 text-gray-700">23-4-25</td>
              <td className="py-3 text-gray-900">Webinar on Dental Progress</td>
              <td className="py-3 text-blue-600">Zoom Link</td>
              <td className="py-3"><ActionIcons /></td>
              <td className="py-3"><a href="#" className="text-blue-600">Details</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="text-center mt-6">
      <button className="text-blue-600 font-semibold">Show All</button>
    </div>
  </div>
)

const ConferencesPage = () => {
  return (
    <Navbar>
      <div className="p-2">
        <Toolbar />
        <ConferencesTable />
      </div>
    </Navbar>
  )
}

export default ConferencesPage


