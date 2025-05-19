import './App.css'
import { Boxplot } from './containers/Boxplot'
import { data } from "./data";

const App: React.FC = () => {

  return (
    <>
      <div>
        <Boxplot data={data} width={400} height={400} />
      </div>
    </>
  )
}

export default App
