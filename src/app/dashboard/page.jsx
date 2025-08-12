"use client"
import React from 'react'
import Navbar from '../navbar/navabr'

const StatCard = ({ title, value, sub, percent }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center gap-4">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-4 border-gray-200" />
      <div className="absolute inset-0 rounded-full border-4 border-blue-500" style={{ clipPath: 'inset(0 0 50% 0)' }} />
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-blue-600">{percent}%</span>
    </div>
    <div>
      <div className="text-gray-500 text-sm">{title}</div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-gray-400 text-xs">{sub}</div>
    </div>
  </div>
)

const ProgressBar = ({ percent, color = 'bg-blue-500' }) => (
  <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
    <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
  </div>
)

const LineChart = () => (
  <div className="w-full h-60">
    <svg viewBox="0 0 600 240" className="w-full h-full">
      <polyline fill="none" stroke="#3b82f6" strokeWidth="3" points="0,180 80,160 140,170 200,140 260,180 320,120 380,130 440,170 500,150 560,180" />
      <line x1="0" y1="200" x2="600" y2="200" stroke="#e5e7eb" />
    </svg>
  </div>
)

const LatestEvents = () => (
  <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Latest Events</h3>
    <ul className="space-y-4">
      {[
        { time: '11:32', text: 'New Page created by May Padilla' },
        { time: '11:30', text: 'New Comment by Erik Pittman' },
        { time: '11:20', text: 'New User added' },
        { time: '11:10', text: 'Added New Post' },
      ].map((e, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-xs text-gray-500 mt-1 w-10">{e.time}</span>
          <span className="flex-1 text-gray-700">{e.text}</span>
        </li>
      ))}
    </ul>
  </div>
)

const UpcomingTable = () => (
  <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
    <div className="text-lg font-semibold text-gray-800 mb-3">Upcoming Conference List</div>
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500">
            <th className="py-2">Date</th>
            <th className="py-2">Conference Name</th>
            <th className="py-2">Venue</th>
            <th className="py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => (
            <tr key={i} className="border-t border-gray-100">
              <td className="py-2 text-gray-600">23-4-25</td>
              <td className="py-2 text-gray-800">Webinar on Dental Progress</td>
              <td className="py-2 text-blue-600">Zoom Link</td>
              <td className="py-2 text-blue-600">Details</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)

const KPI = ({ title, value, sub }) => (
  <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
    <div className="text-sm text-gray-500">{title}</div>
    <div className="text-2xl font-bold text-gray-800 mt-1">{value}</div>
    {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
  </div>
)

const ActivityChart = () => (
  <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-lg font-semibold text-gray-800">Activity</h3>
      <span className="text-xs text-gray-500">Month</span>
    </div>
    <div className="flex items-end gap-3 h-40">
      {Array.from({ length: 12 }).map((_, i) => (
        <div key={i} className="w-4 bg-blue-500/70 rounded" style={{ height: `${20 + i * 6}px` }} />
      ))}
    </div>
  </div>
)

const DashboardPage = () => {
  return (
    <Navbar>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard title="No.Of Users" value="200+" sub="Last 24 hours" percent={81} />
          <StatCard title="No.Of Conferences" value="350+" sub="Last 24 hours" percent={89} />
          <StatCard title="No.Of Speakers" value="50+" sub="Last 24 hours" percent={50} />
          <StatCard title="No.Of Sponsor" value="50+" sub="Last 24 hours" percent={50} />
        </div>

        <UpcomingTable />

        <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">Statistics</h3>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              {['1D', '1W', '1M', '6M', '1Y'].map((t, i) => (
                <span key={i} className={`px-2 py-1 rounded ${t === '1M' ? 'bg-gray-200 text-gray-800' : ''}`}>{t}</span>
              ))}
            </div>
          </div>
          <LineChart />
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-purple-600 inline-block" /> Money Income</div>
            <div className="flex items-center gap-1"><span className="w-3 h-3 rounded-full bg-gray-500 inline-block" /> Current State</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <h3 className="text-sm text-gray-500 mb-4">Weakest Topics</h3>
            {[
              { name: 'Dental Science', p: 74 },
              { name: 'Computer Science & Engineering', p: 52 },
              { name: 'Laser optics & Photonics', p: 36 },
            ].map((t) => (
              <div key={t.name} className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>{t.name}</span><span className="text-gray-500">{t.p}% Correct</span>
                </div>
                <ProgressBar percent={t.p} color="bg-red-400" />
              </div>
            ))}
          </div>

          <div className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <h3 className="text-sm text-gray-500 mb-4">Strongest Topics</h3>
            {[
              { name: 'Nano Technology & Nano Materials', p: 95 },
              { name: 'Summit on physics', p: 92 },
              { name: 'Nursing & Health Care', p: 89 },
            ].map((t) => (
              <div key={t.name} className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>{t.name}</span><span className="text-gray-500">{t.p}% Correct</span>
                </div>
                <ProgressBar percent={t.p} color="bg-green-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <KPI title="Active Users" value="27/80" />
          <KPI title="Questions Answered" value="3,298" />
          <KPI title="Av. Session Length" value="2m 34s" />
          <KPI title="Starting Knowledge" value="64%" />
          <KPI title="Current Knowledge" value="86%" />
          <KPI title="Knowledge Gain" value="+34%" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2"><ActivityChart /></div>
          <LatestEvents />
        </div>
      </div>
    </Navbar>
  )
}

export default DashboardPage
