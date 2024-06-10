import AppRoutes from "./pages/AppRoutes"

export default function App(){
  function removeHash() {
    setTimeout(function() {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
    }, 0);
  }
  
  return(
    <>
      <AppRoutes/>
    </>
  )
}