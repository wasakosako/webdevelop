import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TaskPage } from './components/page/TaskPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/top" element={<TaskPage />} />
          <Route path="" element={ }
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode >,
)
