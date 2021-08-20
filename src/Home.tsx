import React,{useState} from 'react'
import ExampleA from './Examples/ExampleA/ExampleA';
import ExampleB from './Examples/ExampleB/ExampleB';
import ExampleC from './Examples/ExampleC/ExampleC';
import ExampleD from './Examples/ExampleD/ExampleD';
import ExampleE from './Examples/ExampleE/ExampleE';
import './index.css'

function Home() {
    const [diagram, setDiagram] = useState('ExampleA')
    return (
        <div>
            <div className='btn-section'>
                <button className="btn-default" style={diagram==='ExampleA' ?{color:'yellow'}:{border: 'solid'}} onClick={()=>setDiagram('ExampleA')}>ExampleA</button>
                <button className="btn-default" style={diagram==='ExampleB' ?{color:'yellow'}:{border: 'solid'}} onClick={()=>setDiagram('ExampleB')}>ExampleB</button>
                <button className="btn-default" style={diagram==='ExampleC' ?{color:'yellow'}:{border: 'solid'}} onClick={()=>setDiagram('ExampleC')}>ExampleC</button>
                <button className="btn-default" style={diagram==='ExampleD' ?{color:'yellow'}:{border: 'solid'}} onClick={()=>setDiagram('ExampleD')}>ExampleD</button>
                <button className="btn-default" style={diagram==='ExampleE' ?{color:'yellow'}:{border: 'solid'}} onClick={()=>setDiagram('ExampleE')}>ExampleE</button>
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
            {diagram==='ExampleC' &&(
                <div>
                <ExampleC />
                </div>
            )}
            {diagram==='ExampleD' &&(
                <div>
                <ExampleD />
                </div>
            )}
            {diagram==='ExampleE' &&(
                <div>
                <ExampleE />
                </div>
            )}
        </div>
    )
}


export default Home;
