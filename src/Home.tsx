import React,{useState} from 'react'
import ExampleA from './Examples/ExampleA';
import ExampleB from './Examples/ExampleB';

function Home() {
    const [diagram, setDiagram] = useState('')
    return (
        <div>
            <div>
          <button onClick={()=>setDiagram('ExampleA')}>ExampleA</button>
          <button onClick={()=>setDiagram('ExampleB')}>ExampleB</button>

          </div>
          {diagram==='ExampleA' &&(
                <div>
                <ExampleA/>
                </div>
            )}
            {diagram==='ExampleB' &&(
                <div>
                <ExampleB />
                </div>
            )}
        </div>
    )
}


export default Home;
