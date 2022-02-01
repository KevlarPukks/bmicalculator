import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from "react";

function App() {
  const [weight,setWeight]= useState((125+38)/2)
    const [imperialWeight,setImperialWeight]=useState(0)
    const [imperialHeight,setImperialHeight]=useState(0)
    const[feet,setFeet] = useState(0)
const [height,setHeight]=useState(Math.round(140+210)/2)
    const [bmiText,setBmiText]=useState('')
  const [bmi,setBmi]=useState(0)

function weightWatcher() {
    let imperialConversion = weight * 0.157473;
    setImperialWeight(imperialConversion.toFixed(1))
    //setImperialRemainder()

}
function heightWatcher(){
      let conversion = height *0.032808
    setImperialHeight(Math.floor(conversion))
    let ft = (conversion - Math.floor(conversion)) * 12;
      setFeet(ft)
    console.log(Math.floor(feet))
}

    function heightWeightWatcher(){
        setBmi(weight/Math.pow(height/100,2))

    }

function bmiWatcher() {
    const bgelement = document.querySelector('.App-header')
    if (bmi < 16) {
        setBmiText('Underweight-Severe Thinness')
    } else if (bmi <= 17 && bmi > 16.01) {
        setBmiText(`Underweight-Moderate Thinness`)
    } else if (bmi > 17 && bmi <= 18.5) {
        setBmiText('Underweight-Mild Thinness')
    } else if (bmi > 18.5 && bmi <= 25) {
        setBmiText('Normal BMI')
    } else if (bmi > 25 && bmi <= 30) {
        setBmiText('Overweight-Pre obese')
    } else if (bmi > 30 && bmi <= 35) {
        setBmiText('Overweight-Obese Class I')
    } else if (bmi > 35 && bmi <= 40) {
        setBmiText('Overweight-Obese Class II')
    } else if (bmi > 40) {
        setBmiText('Overweight-Obese Class III')
    }

    let num = bmi * 4
    let red = num
    let green = 255 - num
    if (bmi < 20) {
//red =255-red

        red =255-(num*2)
        green =(num+num)+20
        bgelement.style.backgroundColor = `rgb(${red},${green},0)`
    } else {
        red = num
        green = 255 - num
        bgelement.style.backgroundColor = `rgb(${red},${green},0)`
    }

    console.log(red, bmiText, green)
}
useEffect(bmiWatcher,[bmi])
    useEffect(heightWatcher,[height])
    useEffect(weightWatcher,[weight])

  useEffect(heightWeightWatcher,[height,weight])
  return (
    <div className="App">
      <header className="App-header">
        <h1>BMI Calculator</h1>
        <div className='weight-slider-container'>
          <label htmlFor="weight"> <h4>Weight:</h4> {weight} (kg) {imperialWeight}(st)</label>
          <input id='weight' min={38} max={125} onInput={(e)=>{setWeight(e.target.value)}}   type="range"/>
          <label  htmlFor="height"> <h4> Height:</h4> {height} (cm) {imperialHeight}"{Math.floor(feet)}'</label>
            <input id='height' onInput={(e)=>setHeight(e.target.value)} min={140} max={210} type="range"/>
        </div>
<h3> {bmiText}</h3>

        <a
          className="App-link"
          href="https://pukks.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          pukks.online
        </a>
      </header>
    </div>
  );
}

export default App;
