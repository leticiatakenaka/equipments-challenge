import styled from "styled-components";
import Map from "./components/Map";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
