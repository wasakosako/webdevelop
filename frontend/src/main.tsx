import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/page/TaskPage.tsx'
import { TaskDetail } from './components/page/TaskDetailPage.tsx'
import { Login } from './components/page/Login.tsx'
import { Register } from './components/page/Register.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/top" element={<TaskPage />} />
          <Route path="/taskdetail" element={<TaskDetail />} >
            <Route path=":id" element={<TaskDetail />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode >
)
