import './App.css'
import Card from './components/card/Card'
function App () {
  return (
    <div className='App'>
      <Card
        title='Invincible'
        paragraph='Super Hero strong as hell, he was betrayed by his own father and fought against him to death.'
        imageURL='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c2d0cffb-96b3-48e3-83bb-eb81054ac04a/dekf6tx-9b4ad66d-e264-4123-9a89-86af02bde8e4.png/v1/fill/w_1280,h_1003,strp/invincible_png_by_dglproductions_dekf6tx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwMyIsInBhdGgiOiJcL2ZcL2MyZDBjZmZiLTk2YjMtNDhlMy04M2JiLWViODEwNTRhYzA0YVwvZGVrZjZ0eC05YjRhZDY2ZC1lMjY0LTQxMjMtOWE4OS04NmFmMDJiZGU4ZTQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.xk9SEjpqmWyolsN6_h-f5IBUCGBPTYCBzArnsVeR__Y'
        href='https://en.wikipedia.org/wiki/Invincible_(comics)'
        buttonText='+ Info'
      />
      <Card
        title='Omni Man'
        paragraph='The father I hate this guy so much, such an ass'
        imageURL='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/59acf3d1-9e52-4ef0-bb6b-c2a1a7b3ec10/dfbrrxw-71184c06-8ea4-41b0-b3fa-28917ec45455.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU5YWNmM2QxLTllNTItNGVmMC1iYjZiLWMyYTFhN2IzZWMxMFwvZGZicnJ4dy03MTE4NGMwNi04ZWE0LTQxYjAtYjNmYS0yODkxN2VjNDU0NTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ElGeiIpHsxh9X4F8c0EV3FyJjuCIU1p9Kq3AUxIWJuQ'
        href='https://es.wikipedia.org/wiki/Omni-Man'
        buttonText='+ Info'
      />
    </div>
  )
}

export default App
