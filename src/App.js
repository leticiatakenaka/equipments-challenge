import Map from "./components/Map";

function App() {
  return (
    <div>
      <Map />
      <ul>
        <li>
          <img
            src={"http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"}
          />
          Parado
        </li>
        <li>
          <img src={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"} />
          Manutenção
        </li>
        <li>
          <img src={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"} />
          Operando
        </li>
      </ul>
    </div>
  );
}

export default App;
