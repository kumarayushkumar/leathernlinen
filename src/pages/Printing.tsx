import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import vid from '../assets/videos/video.mp4';
import Header from '../components/Header';
function Printing() {
  return (
    <>
    <Header/>
    <div className="services" id="services">
      <div className="video">
      <Video autoPlay loop muted
       controls={[]}
      >
        <source src={vid} type='video/webm'/>
      </Video>
      </div>

    </div>
    </>
  )
}

export default Printing