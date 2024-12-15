import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/page/TaskPage.tsx'
import { TaskDetail } from './components/page/TaskDetailPage.tsx'
import { Login } from './components/page/Login.tsx'
import { Register } from './components/page/Register.tsx'
import { Toaster } from './components/ui/toaster.tsx'
import { AuthProvider } from './context/authContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/top" element={<TaskPage />} />
            <Route path="/taskdetail/:id" element={<TaskDetail />} >
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode >
)
