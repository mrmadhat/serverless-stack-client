import React from "react"
import { useLocation, Route, Redirect } from "react-router-dom"
import { useAppContext } from "../libs/contextLib"

const AuthenticatedRoute = ({ children, ...rest }) => {
  const { pathname, search } = useLocation()
  const { isAuthenticated } = useAppContext()

  return (
    <Route {...rest}>
      {isAuthenticated ? (
        children
      ) : (
        <Redirect to={`/login?redirect=${pathname}${search}`} />
      )}
    </Route>
  )
}

export default AuthenticatedRoute
