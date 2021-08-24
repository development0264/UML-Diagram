import * as React  from "react";
import "../Example.css";
// import the DiagramComponent
import {
  ConnectorModel,
  DiagramComponent,
  DiagramConstraints,
  NodeConstraints,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";

import styled from 'styled-components';

import ExampleAData from './ExampleA.json'

interface ColorProps{
  color:String;
  nodeName:String;
}
interface Props{
  colors: Array<ColorProps>;
  
}

const DiagramComponentCustom = styled.div<Props>` 
${props=>props.colors.map(item=>
  `#${item.nodeName}_groupElement:hover , #${item.nodeName}_groupElement:hover *{
    stroke: ${item.color};
  }
  #${item.nodeName}_groupElement:hover text {
    fill: ${item.color} !important;
  }`
  )}
`
 
export default class ExampleA extends React.Component<{}, {node:NodeModel[],connector:ConnectorModel[],nodeColorList:ColorProps[]}> {
  constructor(props: { props: any; } | Readonly<{ props: any,}>){
    super(props)
    this.state={
       node:[],
       connector:[],
       nodeColorList:[]
    }
  }
  componentDidMount(){
  
      const nodes : NodeModel[]=[];
      const connectors: ConnectorModel[] =[];
      const nodeColorList : ColorProps[]=[];
      const colors = ["silver","orange","maroon","green","blue","red","yellow","pink","gold","cyan"];

      var offsetY =350;
        ExampleAData.paths[0].nodes.map((item,index)=>{
        if(index>0){
          offsetY+=300;
        }
        nodeColorList.push({
          color:colors[Math.floor(Math.random()*colors.length)],
          nodeName:item.name
        })
          nodes.push({
            id:item.name,
            height:35,
            width: 80,
            offsetX: offsetY,
            offsetY:100,
            style: {
              strokeWidth: 2,
            },
            shape: { type: "UmlActivity", shape: "Action" },
            
            annotations: [
              {
                content: item.name,
              },
            ],
            constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select | NodeConstraints.ReadOnly) | NodeConstraints.ReadOnly, 
          },)
        })

        ExampleAData.paths[0].edges.map((item,index)=>{
            connectors.push({
              id: item.name,
              sourceID: item.start.name,
              targetID: item.end.name,
              style: {
                strokeWidth: 2,
              },
              annotations: [{
                // Sets the text to be diaplayed
                verticalAlignment: 'Top',
                content: item.name
              }],
               constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select)
            },)
        })
        this.setState({
          node:nodes,
          connector:connectors,
          nodeColorList:nodeColorList
        })
  }
  render() {
    return (
      <div style={{borderWidth:1}}>
      {this.state.node.length > 0 ?<DiagramComponentCustom colors={this.state.nodeColorList}>
        <div className="graphName" >{ExampleAData.name}</div>
        <DiagramComponent
          id="diagramA"
          width={"100%"}
           height={"200px"}
          // Add node
           connectors={this.state.connector}
          nodes={this.state.node}
          constraints = {
            DiagramConstraints.Default & ~DiagramConstraints.PageEditable
        }
          snapSettings={{ constraints: SnapConstraints.None  }}
        // render initialized Diagram
        />
        </DiagramComponentCustom>:<div>loading...</div>}
      </div>
    );
  }
}
