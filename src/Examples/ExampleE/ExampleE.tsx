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
import ExampleEdata from './ExampleE.json'

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
   
export default class ExampleE extends React.Component<{}, {node:NodeModel[],connector:ConnectorModel[],nodeColorList:ColorProps[]}> {
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

      var offsetY =0;
        ExampleEdata.paths.map((itm)=>{
        itm.nodes.map((item,index)=>{
     if(index<2){
         if(index<1){
            offsetY+=300;
         }
         else{
          offsetY+=600;
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
        }else{
            nodeColorList.push({
                color:colors[Math.floor(Math.random()*colors.length)],
                nodeName:item.name
              })
                nodes.push({
                  id:item.name,
                  height:35,
                  width: 80,
                  offsetX: 600,
                  offsetY:100,
                  style: {
                    strokeWidth: 2,
                  },
                  shape: { type: "UmlActivity", shape: "Decision" },
                  
                  annotations: [
                    {
                      content: item.name,
                    },
                  ],
                  constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select | NodeConstraints.ReadOnly) | NodeConstraints.ReadOnly, 
                })
            }
         })
      })
   
    ExampleEdata.paths.map((itm)=>{
    itm.edges.map((item,index)=>{
        if(index>0){
        connectors.push({
            id: item.name,
            sourceID: item.start.name,
            targetID: item.end.name,
            type: 'Straight',
            targetDecorator: {
                shape: 'Custom',
            },
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
    }
    else{
        connectors.push({
            id: item.name,
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
    }
    })
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
        <div className="graphName">{ExampleEdata.name}</div>
        <DiagramComponent
          id="diagram"
          width={"100%"}
          height={"200px"}
          // Add node
           connectors={this.state.connector}
          nodes={this.state.node}
          constraints = {
            DiagramConstraints.Default & ~DiagramConstraints.PageEditable
        }
          snapSettings={{ constraints: SnapConstraints.None }}
        // render initialized Diagram
        />
        </DiagramComponentCustom>:<div>loading...</div>}
      </div>
    );
  }
}
