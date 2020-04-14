// import "../styles.css";

// Working Basic HTML5
// import Example from '../src/components/example'
// import { DndProvider } from 'react-dnd'
// import Backend from 'react-dnd-html5-backend'

// HTML AND TOUCH
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend';
import TouchBackend from 'react-dnd-touch-backend';
import MultiBackend, { TouchTransition } from 'react-dnd-multi-backend';

const HTML5toTouch = {
  backends: [
    {
      backend: TouchBackend,
      options: {enableMouseEvents: true}, // Note that you can call your backends with options
      preview: true,
      transition: TouchTransition
    }
  ]
};

function MyApp({ Component, pageProps }) {
  return (
    <DndProvider backend={MultiBackend} options={HTML5toTouch}>
      <Component {...pageProps} />
    </DndProvider>
  )
}

export default MyApp;



