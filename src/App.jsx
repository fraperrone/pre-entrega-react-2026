
import './App.css'

import RouterApp from './router/RouterApp'
import { AuthProvider } from './context/AuthContext'
function App() {

  return (
    <AuthProvider>
      <RouterApp></RouterApp>
    </AuthProvider>
  )
}

export default App
