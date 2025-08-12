"use client"
import React, { useState } from 'react'
import Navbar from '../navbar/navabr'

const ReportsPage = () => {
  const [selectedConference, setSelectedConference] = useState('all-time')
  const [selectedSponsor, setSelectedSponsor] = useState('all')
  const [selectedSpeaker, setSelectedSpeaker] = useState('all')
  const [selectedTimeRange, setSelectedTimeRange] = useState('1M')

  const users = [
    { name: 'Bess Atkins', status: 'Active', avatar: 'BA' },
    { name: 'Brett Foster', status: 'Offline', avatar: 'BF' },
    { name: 'Leona Todd', status: 'Offline', avatar: 'LT' },
    { name: 'Ann Ortiz', status: 'Active', avatar: 'AO' },
    { name: 'Nicholas Black', status: 'Active', avatar: 'NB' },
    { name: 'Ollie Harmon', status: 'Wait', avatar: 'OH' },
    { name: 'Vincent Reese', status: 'Wait', avatar: 'VR' },
    { name: 'Ida Robertson', status: 'Active', avatar: 'IR' },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-500'
      case 'Offline': return 'bg-gray-400'
      case 'Wait': return 'bg-yellow-500'
      default: return 'bg-gray-400'
    }
  }

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'Active': return 'text-green-600'
      case 'Offline': return 'text-gray-500'
      case 'Wait': return 'text-yellow-600'
      default: return 'text-gray-500'
    }
  }

  return (
    <Navbar>
      <div className="p-6 space-y-6">
        {/* Top Filters */}
        <div className="flex gap-4">
          <div className="relative">
            <select
              value={selectedConference}
              onChange={(e) => setSelectedConference(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all-time">Conferences: All-time</option>
              <option value="this-month">This Month</option>
              <option value="last-month">Last Month</option>
            </select>
            <svg className="absolute right-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="relative">
            <select
              value={selectedSponsor}
              onChange={(e) => setSelectedSponsor(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Sponsor: All</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
            </select>
            <svg className="absolute right-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          
          <div className="relative">
            <select
              value={selectedSpeaker}
              onChange={(e) => setSelectedSpeaker(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Speaker: All</option>
              <option value="featured">Featured</option>
              <option value="regular">Regular</option>
            </select>
            <svg className="absolute right-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {/* KPI Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="text-sm text-gray-500">Active Users</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">27/80</div>
          </div>
          
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="text-sm text-gray-500">Questions Answered</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">3,298</div>
          </div>
          
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="text-sm text-gray-500">Av. Session Length</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">2m 34s</div>
          </div>
          
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="text-sm text-gray-500">Starting Knowledge</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">64%</div>
            <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
              <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="text-sm text-gray-500">Current Knowledge</div>
            <div className="text-2xl font-bold text-gray-800 mt-1">86%</div>
            <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
              <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="text-sm text-gray-500">Knowledge Gain</div>
            <div className="text-2xl font-bold text-green-600 mt-1">+34%</div>
            <div className="w-full h-1 bg-gray-200 rounded-full mt-2">
              <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Weakest and Strongest Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Weakest Topics */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Weakest Topics</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Dental Science</span>
                  <span className="text-gray-500">74% Correct</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-3/4 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Computer Science & Engineering</span>
                  <span className="text-gray-500">52% Correct</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-1/2 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Laser optics & Photonics</span>
                  <span className="text-gray-500">36% Correct</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-1/3 h-2 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Strongest Topics */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-800">Strongest Topics</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Nano Technology & Nano Materials</span>
                  <span className="text-gray-500">95% Correct</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-19/20 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Summit on physics</span>
                  <span className="text-gray-500">92% Correct</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-23/25 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Nursing & Health Care</span>
                  <span className="text-gray-500">89% Correct</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-22/25 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Users List and Statistics Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Users List */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <h3 className="text-lg font-semibold text-gray-800">Users</h3>
                <span className="text-sm text-gray-500">1</span>
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </div>
            </div>
            
            <div className="space-y-3">
              {users.map((user, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                    {user.avatar}
                  </div>
                  <span className="flex-1 text-sm text-gray-800">{user.name}</span>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${getStatusColor(user.status)}`}></div>
                    <span className={`text-xs ${getStatusTextColor(user.status)}`}>{user.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Statistics Chart */}
          <div className="bg-white rounded-lg shadow border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Statistics</h3>
              <div className="flex items-center gap-2">
                {['1D', '1W', '1M', '6M', '1Y'].map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedTimeRange(range)}
                    className={`px-3 py-1 text-xs rounded ${
                      selectedTimeRange === range
                        ? 'bg-blue-100 text-blue-800'
                        : 'text-gray-500 hover:bg-gray-100'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="h-48 mb-4">
              <svg viewBox="0 0 400 200" className="w-full h-full">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                <polyline
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  points="0,150 50,120 100,140 150,100 200,80 250,90 300,60 350,70 400,50"
                />
                <circle cx="200" cy="80" r="4" fill="black" />
                <text x="200" y="70" textAnchor="middle" className="text-xs">$6,41</text>
              </svg>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-purple-600 inline-block"></span>
                Money Income
              </div>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-gray-500 inline-block"></span>
                Current State
              </div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

export default ReportsPage
