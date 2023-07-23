import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { registerLicense } from '@syncfusion/ej2-base';
import './index.css'

registerLicense('Ngo9BigBOggjHTQxAR8/V1NGaF5cXmpCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdgWXhccHVVRGhZWEFwXEE=');


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
