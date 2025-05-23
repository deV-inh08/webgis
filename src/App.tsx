import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'
import './App.css'
import useRouteElement from '@/hooks/useRouteElement'

function App() {
  const routeElement = useRouteElement()
  return (
    <>
      <ErrorBoundary>
        {routeElement}
      </ErrorBoundary>
    </>
  )
}

export default App
