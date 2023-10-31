import { Player } from '@lottiefiles/react-lottie-player'

function App() {
  return (
    <>
      <Player
        src="https://lottie.host/3d5e86ec-5709-4eef-b633-01509342cf3b/AaRmJeuK36.json" loop autoplay speed={5} 
        style={{ height: "300px", width: "300px"}}
      />
    </>
  )
}

export default App;