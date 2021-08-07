import * as React from "react";
import "./App.css";
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
interface strokeProps {
  stroke: String;
};
const DiagramComponentCustom = styled.div`
    #diagram_diagramLayer #NewIdea_content_groupElement :hover {
      stroke: red ;
    }
`

// A node is created and stored in nodes array.
let node: NodeModel[] = [
  {
    id: "NewIdea",
    height: 35,
    width: 80,
    offsetX: 300,
    style: {
      strokeWidth: 2,
      
    },
    offsetY: 80,
    shape: { type: "UmlActivity", shape: "Action" },
    annotations: [
      {
        content: "Airlines",
      
      },
    ],
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "NewIdea2",
    height: 35,
    width: 80,
    style: {
      strokeWidth: 2,
    },
    offsetX: 600,
    offsetY: 80,
    shape: { type: "UmlActivity", shape: "Action" },
    annotations: [
      {
        content: "Airports",
      },
    ],
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "NewIdea3",
    height: 35,
    width: 80,
    style: {
      strokeWidth: 2,
    },
    offsetX: 900,
    offsetY: 80,
    shape: { type: "UmlActivity", shape: "Action" },
    annotations: [
      {
        content: "Countries",
      },
    ],
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "NewIdea4",
    height: 35,
    width: 80,
    style: {
      strokeWidth: 2,
    },
    offsetX: 350,
    offsetY: 280,
    shape: { type: "UmlActivity", shape: "Action" },
    annotations: [
      {
        content: "Airlines Groups",
      },
    ],
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  
  {
    id: "NewIdea5",
    height: 25,
    width: 45,
    style: {
      strokeWidth: 2,
    },
    offsetX: 550,
    offsetY: 280,
    shape: { type: "UmlActivity", shape: "Decision" },
    annotations: [
      {
        content: "",
      },
    ],
     constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select| NodeConstraints.Tooltip), 
  },
  {
    id: "NewIdea6",
    height: 35,
    width: 80,
    style: {
      strokeWidth: 2,
    },
    offsetX: 750,
    offsetY: 280,
    shape: { type: "UmlActivity", shape: "Action" },
    annotations: [
      {
        content: "Manufacture",
      },
    ],
     constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "NewIdea7",
    height: 30,
    width: 55,
    style: {
      strokeWidth: 2,
    },
    offsetX: 500,
    offsetY: 220,
    rotateAngle:337,
    shape: { type: "UmlActivity", shape: "Decision" },
    annotations: [
      {
        content: "test",
      },
    ],
   tooltip:{

   },
    constraints:( NodeConstraints.Default | NodeConstraints.Tooltip) &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select| NodeConstraints.Tooltip), 
  },
  {
    id: "NewIdea8",
    height: 25,
    width: 45,
    style: {
      strokeWidth: 2,
    },
    offsetX: 760,
    offsetY: 130,
    rotateAngle:343,
    shape: { type: "UmlActivity", shape: "Decision" },
    annotations: [
      {
        content: "",
      },
    ],
    tooltip:{
      content:"this is test2"
         },
   constraints: ( NodeConstraints.Default | NodeConstraints.Tooltip) &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "NewIdea9",
    height: 25,
    width: 45,
    style: {
      strokeWidth: 2,
    },
    offsetX: 595,
    offsetY: 185,
    rotateAngle:343,
    shape: { type: "UmlActivity", shape: "Decision" },
    annotations: [
      {
        content: "",
      },
    ],
  constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select| NodeConstraints.Tooltip), 
  },
];

let connectors: ConnectorModel[] = [
  {
    id: "connector1",
    sourceID: "NewIdea",
    targetID: "NewIdea2",
    style: {
      strokeWidth: 2,
    },
     constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector2",
    sourceID: "NewIdea2",
    targetID: "NewIdea3",
    style: {
      strokeWidth: 2,
    },
   constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector3",
    sourceID: "NewIdea4",
    sourcePortID: "NewIdea4",
    targetID: "NewIdea5",
    targetPortID: "NewIdea5",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector4",
    sourceID: "NewIdea5",
    sourcePortID: "NewIdea5",
    targetID: "NewIdea6",
    targetPortID: "NewIdea6",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
   constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector5",
    sourceID: "NewIdea4",
    sourcePortID: "NewIdea4",
    targetID: "NewIdea7",
    targetPortID: "NewIdea7",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
 constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector6",
    sourceID: "NewIdea7",
    sourcePortID: "NewIdea7",
    targetID: "NewIdea9",
    targetPortID: "NewIdea9",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector7",
    sourceID: "NewIdea8",
    sourcePortID: "NewIdea8",
    targetID: "NewIdea3",
    targetPortID: "NewIdea3",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
   constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector8",
    sourceID: "NewIdea6",
    sourcePortID: "NewIdea6",
    targetID: "NewIdea3",
    targetPortID: "NewIdea3",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
    constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
  {
    id: "connector9",
    sourceID: "NewIdea9",
    sourcePortID: "NewIdea9",
    targetID: "NewIdea8",
    targetPortID: "NewIdea8",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
constraints: NodeConstraints.Default &~(NodeConstraints.Drag | NodeConstraints.Resize |NodeConstraints.Select), 
  },
];

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div >
      <DiagramComponentCustom>
        <DiagramComponent
          id="diagram"
          className="sb-mobile-palette-bar"
          width={"100%"}
          height={"600px"}
          // Add node
          connectors={connectors}
          nodes={node}
          constraints = {
            DiagramConstraints.Default 
        }
          snapSettings={{ constraints: SnapConstraints.None }}
        // render initialized Diagram
        />
        </DiagramComponentCustom>
      </div>
    );
  }
}
