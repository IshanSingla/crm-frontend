import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from '../Pages/Buissness/Dashboard'

export default function DashboardRoute({ id }) {
  return (
    <Routes>
      <Route path="/" element={<Dashboard  id={id} />} />
      <Route path="/inventory/:inventoryid" element={<></>} />
      <Route path="/expenses/:expensesid" element={<></>} />
      <Route path="*" element={<Navigate to="./" />} />
    </Routes>
  )
}
