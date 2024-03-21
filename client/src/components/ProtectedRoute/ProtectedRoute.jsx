import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import Authorized from '../Authorized/Authorized'

const ProtectedRoute = (props) => {
    const isAdmin = useSelector(state => state.account.user.isAdmin)
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
  return (
    <div>
    {isAdmin && isAuthenticated === false ? (
        <Authorized />
    ) : (
        <>{props.children}</>
    )}
</div>
  )
}

export default ProtectedRoute