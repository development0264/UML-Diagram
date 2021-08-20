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

import ExampleDdata from './ExampleD.json'

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
 
export default class ExampleD extends React.Component<{}, {node:NodeModel[],connector:ConnectorModel[],nodeColorList:ColorProps[]}> {
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
      const colors = ["silver","orange","maroon","green","blue","red","yellow","pink","gold","Cyan"];

      var offsetY =50;
        ExampleDdata.paths.map((itm,index)=>{
        if(index<2){
        itm.nodes.map((item,index)=>{
     
          offsetY+=300;
     
        nodeColorList.push({
          color:colors[Math.floor(Math.random()*colors.length)],
          nodeName:item.name
        })
        
          nodes.push({
            id:item.name,
            height:35,
            width: 80,
            offsetX: offsetY,
            offsetY:300,
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
        }
    })
        ExampleDdata.paths.map((itm,index)=>{
        if(index<2){
        itm.edges.map((item,index)=>{
        
            connectors.push({
                id: itm.name,
                sourceID: item.start.name,
                targetID: item.end.name,
                style: {
                strokeWidth: 2,
                },
                annotations: [{
                verticalAlignment: 'Bottom',
                // Sets the text to be diaplayed
                content: item.name
                }],
                constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select)

            },)
        })
        }
        else{
            itm.edges.map((item,index)=>{
                connectors.push({
                  id: itm.name,
                  sourceID: item.start.name,
                  targetID: item.end.name,
                  style: {
                    strokeWidth: 2,
                  },
                 
                  type: 'Bezier',
                  annotations: [{       
                    margin: {
                        top: 50
                    },                 
                    // Sets the text to be diaplayed
                    content: item.name
                  }],
                  constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select),
                    segments: [{
                        // Defines the type of the segment
                        type: 'Bezier',
                        point1: {
                            x: 600,
                            y: 380
                        },
                        // Second control point: an absolute position from the page origin
                        point2: {
                            x: 700,
                            y: 380
                        }
                    }],
                    sourcePoint: {
                        x: 500,
                        y: 400
                    },
                    targetPoint: {
                        x: 900,
                        y: 400
                    },
                },)
            })
        }
    })

    this.setState({
        node:nodes,
        connector:connectors,
        nodeColorList:nodeColorList
    })
  }
  render() {
    return (
      <div >
      {this.state.node.length > 0 ?<DiagramComponentCustom colors={this.state.nodeColorList}>
        <div className="graphName">{ExampleDdata.name}</div>
        <DiagramComponent
          id="diagram"
          width={"100%"}
          height={"400px"}
          // Add node
          connectors={this.state.connector}
          nodes={this.state.node}
          constraints = {
            DiagramConstraints.Default 
        }
          snapSettings={{ constraints: SnapConstraints.None }}
        // render initialized Diagram
        />
        </DiagramComponentCustom>:<div>loading...</div>}
      </div>
    );
  }
}
