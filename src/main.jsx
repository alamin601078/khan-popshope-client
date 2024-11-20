import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes.jsx'
import FirebaseProvider from './firebaseProvider/FirebaseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <FirebaseProvider>
         <RouterProvider router={router} />
      </FirebaseProvider>
  </StrictMode>,
)
