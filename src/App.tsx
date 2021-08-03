import * as React from "react";
import "./App.css";
// import the DiagramComponent
import {
  ConnectorModel,
  DiagramComponent,
  NodeModel,
  SnapConstraints
} from "@syncfusion/ej2-react-diagrams";

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
  },
  {
    id: "NewIdea7",
    height: 25,
    width: 45,
    style: {
      strokeWidth: 2,
    },
    offsetX: 500,
    offsetY: 155,
    shape: { type: "UmlActivity", shape: "Decision" },
    annotations: [
      {
        content: "",
      },
    ],
  },
  {
    id: "NewIdea8",
    height: 25,
    width: 45,
    style: {
      strokeWidth: 2,
    },
    offsetX: 700,
    offsetY: 155,
    shape: { type: "UmlActivity", shape: "Decision" },
    annotations: [
      {
        content: "",
      },
    ],
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
  },
  {
    id: "connector2",
    sourceID: "NewIdea2",
    targetID: "NewIdea3",
    style: {
      strokeWidth: 2,
    },
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
  },
  {
    id: "connector6",
    sourceID: "NewIdea7",
    sourcePortID: "NewIdea7",
    targetID: "NewIdea8",
    targetPortID: "NewIdea8",
    type: "Straight",
    style: {
      strokeWidth: 2,
      strokeDashArray: "5,5",
    },
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
  }
];

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div >
        <DiagramComponent
          id="diagram"
          className="sb-mobile-palette-bar"
          width={"100%"}
          height={"600px"}
          // Add node
          connectors={connectors}
          nodes={node}
          snapSettings={{ constraints: SnapConstraints.None }}
        // render initialized Diagram
        />
      </div>
    );
  }
}
