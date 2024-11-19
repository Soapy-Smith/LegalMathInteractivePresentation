import React from 'react';

interface FlowchartNode {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'process' | 'decision' | 'result';
}

interface FlowchartEdge {
  from: string;
  to: string;
  label?: string;
}

const LegalFlowchart = () => {
  const nodes: FlowchartNode[] = [
    { id: 'issue', label: 'Issue Identified', x: 400, y: 50, type: 'process' },
    { id: 'precedent', label: 'Does Precedent Exist?', x: 400, y: 150, type: 'decision' },
    { id: 'analyze', label: 'Analyze Precedent Cases', x: 200, y: 250, type: 'process' },
    { id: 'analogous', label: 'Consider Analogous Cases', x: 600, y: 250, type: 'process' },
    { id: 'distinguished', label: 'Is Case Distinguished?', x: 200, y: 350, type: 'decision' },
    { id: 'similar', label: 'Are Cases Analogous?', x: 600, y: 350, type: 'decision' },
    { id: 'factors', label: 'Analyze Distinguishing Factors', x: 100, y: 450, type: 'process' },
    { id: 'direct', label: 'Apply Precedent Directly', x: 300, y: 450, type: 'process' },
    { id: 'reasoning', label: 'Apply Similar Reasoning', x: 500, y: 450, type: 'process' },
    { id: 'new-theory', label: 'Develop New Legal Theory', x: 700, y: 450, type: 'process' },
    { id: 'outcome', label: 'Is Outcome Just?', x: 400, y: 550, type: 'decision' },
    { id: 'document', label: 'Document Reasoning', x: 200, y: 650, type: 'result' },
    { id: 'policy', label: 'Consider Policy Implications', x: 600, y: 650, type: 'process' },
    { id: 'refine', label: 'Refine Analysis', x: 600, y: 750, type: 'process' }
  ];

  const edges: FlowchartEdge[] = [
    { from: 'issue', to: 'precedent' },
    { from: 'precedent', to: 'analyze', label: 'Yes' },
    { from: 'precedent', to: 'analogous', label: 'No' },
    { from: 'analyze', to: 'distinguished' },
    { from: 'analogous', to: 'similar' },
    { from: 'distinguished', to: 'factors', label: 'Yes' },
    { from: 'distinguished', to: 'direct', label: 'No' },
    { from: 'similar', to: 'reasoning', label: 'Yes' },
    { from: 'similar', to: 'new-theory', label: 'No' },
    { from: 'factors', to: 'outcome' },
    { from: 'direct', to: 'outcome' },
    { from: 'reasoning', to: 'outcome' },
    { from: 'new-theory', to: 'outcome' },
    { from: 'outcome', to: 'document', label: 'Yes' },
    { from: 'outcome', to: 'policy', label: 'No' },
    { from: 'policy', to: 'refine' },
    { from: 'refine', to: 'outcome' }
  ];

  // SVG drawing functions
  const drawNode = (node: FlowchartNode) => {
    const width = 160;
    const height = 60;

    switch (node.type) {
      case 'decision':
        // Diamond shape for decisions
        const points = `${node.x},${node.y - height/2} ${node.x + width/2},${node.y} ${node.x},${node.y + height/2} ${node.x - width/2},${node.y}`;
        return (
          <g key={node.id}>
            <polygon
              points={points}
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-medium fill-current"
            >
              {node.label}
            </text>
          </g>
        );
      case 'result':
        // Rounded rectangle with double border for results
        return (
          <g key={node.id}>
            <rect
              x={node.x - width/2}
              y={node.y - height/2}
              width={width}
              height={height}
              rx={10}
              fill="white"
              stroke="currentColor"
              strokeWidth="3"
              className="text-primary"
            />
            <rect
              x={node.x - width/2 + 5}
              y={node.y - height/2 + 5}
              width={width - 10}
              height={height - 10}
              rx={8}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-medium fill-current"
            >
              {node.label}
            </text>
          </g>
        );
      default:
        // Rectangle for process nodes
        return (
          <g key={node.id}>
            <rect
              x={node.x - width/2}
              y={node.y - height/2}
              width={width}
              height={height}
              rx={5}
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary"
            />
            <text
              x={node.x}
              y={node.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-medium fill-current"
            >
              {node.label}
            </text>
          </g>
        );
    }
  };

  const drawEdge = (edge: FlowchartEdge) => {
    const fromNode = nodes.find(n => n.id === edge.from)!;
    const toNode = nodes.find(n => n.id === edge.to)!;

    // Calculate path
    const path = `M ${fromNode.x} ${fromNode.y + 30} L ${toNode.x} ${toNode.y - 30}`;
    
    return (
      <g key={`${edge.from}-${edge.to}`}>
        <path
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
          className="text-gray-400"
        />
        {edge.label && (
          <text
            x={(fromNode.x + toNode.x) / 2 + 15}
            y={(fromNode.y + toNode.y) / 2}
            textAnchor="middle"
            className="text-xs fill-current text-gray-500"
          >
            {edge.label}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="w-full overflow-x-auto">
      <svg width="800" height="800" className="mx-auto">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className="text-gray-400" />
          </marker>
        </defs>
        {edges.map(drawEdge)}
        {nodes.map(drawNode)}
      </svg>
    </div>
  );
};

export default LegalFlowchart;
