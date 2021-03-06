import React, { useState, useEffect } from "react"
import { Auth } from "aws-amplify"

import { Link, useHistory } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { AppContext } from "./libs/contextLib"
import "./App.css"

import Routes from "./Routes"
import { onError } from "./libs/errorLib"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  const history = useHistory()
  const [isAuthenticated, userHasAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    onload()
  }, [])

  async function onload() {
    try {
      await Auth.currentSession()
      userHasAuthenticated(true)
    } catch (e) {
      if (e !== "No current user") {
        onError(e)
      }
    }

    setIsAuthenticating(false)
  }

  async function handleLogout() {
    await Auth.signOut()

    userHasAuthenticated(false)

    history.push("/login")
  }

  return (
    !isAuthenticating && (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {isAuthenticated ? (
                <>
                  <LinkContainer to="/settings">
                    <NavItem>Settings</NavItem>
                  </LinkContainer>
                  <NavItem onClick={handleLogout}>Logout</NavItem>
                </>
              ) : (
                <>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <ErrorBoundary>
          <AppContext.Provider
            value={{ isAuthenticated, userHasAuthenticated }}
          >
            <Routes />
          </AppContext.Provider>
        </ErrorBoundary>
      </div>
    )
  )
}

export default App
