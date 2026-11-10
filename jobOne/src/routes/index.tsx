import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Jobs from '../pages/Jobs'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import Resume from '../pages/Resume'
import AboutUs from '../pages/AboutUs'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Notification from '../pages/Notification'
import { Check, Confirm } from '../pages/PasswordReset'
import { CreateVacancy, Description } from '../pages/PostJob'

import Public from './public'
import Private from './private'

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Public>
              <Home />
            </Public>
          }
        />

        <Route
          path="/vagas"
          element={
            <Private>
              <Jobs />
            </Private>
          }
        />

        <Route
          path="/entrar"
          element={
            <Public>
              <SignIn />
            </Public>
          }
        />

        <Route
          path="/cadastrar"
          element={
            <Public>
              <SignUp />
            </Public>
          }
        />

        <Route
          path="/password_resets/check"
          element={
            <Public>
              <Check />
            </Public>
          }
        />

        <Route
          path="/password_resets/bm92YXBhc3N3b3JkCg/confirm"
          element={
            <Public>
              <Confirm />
            </Public>
          }
        />

        <Route
          path="/sobre"
          element={
            <Public>
              <AboutUs />
            </Public>
          }
        />

        <Route
          path="/resumo"
          element={
            <Private>
              <Resume />
            </Private>
          }
        />

        <Route
          path="/anunciar_vagas"
          element={
            <Private>
              <CreateVacancy />
            </Private>
          }
        />

        <Route
          path="/settings"
          element={
            <Private>
              <Settings />
            </Private>
          }
        />

        <Route
          path="/profile"
          element={
            <Private>
              <Profile />
            </Private>
          }
        />

        <Route
          path="/anunciar_vagas/description"
          element={
            <Private>
              <Description />
            </Private>
          }
        />

        <Route
          path="/notification"
          element={
            <Private>
              <Notification />
            </Private>
          }
        />
      </Routes>
    </Router>
  )
}

export default AppRoutes
