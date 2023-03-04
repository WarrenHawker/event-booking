import Header from './components/header';
import Event from './components/event';
import { data, Data } from './data';

function App() {
  const eventsDisplay = data.map((item) => {
    return <Event data={item} />;
  });
  return (
    <>
      <Header />
      <main>{eventsDisplay}</main>
    </>
  );
}

export default App;
