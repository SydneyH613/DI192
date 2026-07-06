import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const slides = [
  {
    city: 'Hong Kong',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Hong_Kong_Night_Skyline.jpg?width=1000',
  },
  {
    city: 'Macao',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Macau_-_Skyline.jpg?width=1000',
  },
  {
    city: 'Japan',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Mount_Fuji_from_Lake_Kawaguchi_s2.jpg?width=1000',
  },
  {
    city: 'Las Vegas',
    image:
      'https://commons.wikimedia.org/wiki/Special:FilePath/Las_Vegas_Strip_lights_at_night.jpg?width=1000',
  },
]

function App() {
  return (
    <div className="App container">
      <h1 className="text-center my-4">React Carousel</h1>
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {slides.map((slide) => (
          <div key={slide.city}>
            <img src={slide.image} alt={slide.city} />
            <p className="legend">{slide.city}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default App
