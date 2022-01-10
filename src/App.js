import Button from './Components/Button';

function App() {

    function handleButtonClick() {
        console.log("Button clicked");
    }


  return (
   <div style={{display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap"}}>
        <Button>Normal</Button>
        <Button outline>Outline</Button>
        <Button className="extra-class" onClick={handleButtonClick}>Customizable</Button>
    </div>
  );
}

export default App;
