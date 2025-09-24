import React, { useState, useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
} from 'reactflow';
import { toast, ToastContainer } from 'react-toastify';
import 'reactflow/dist/style.css';
import 'react-toastify/dist/ReactToastify.css';

// Import our custom components
import TextNode from './components/TextNode.jsx';
import NodesPanel from './components/NodesPanel.jsx';
import SettingsPanel from './components/SettingsPanel.jsx';
import SaveButton from './components/SaveButton.jsx';

// Define node types for React Flow
const nodeTypes = {
  textNode: TextNode,
};

// Initial nodes and edges
const initialNodes = [];
const initialEdges = [];

function FlowBuilder() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  // Handle edge connections
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // Handle node selection
  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setShowSettings(true);
  }, []);

  // Handle pane click to deselect nodes
  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
    setShowSettings(false);
  }, []);

  // Add a new text node
  const addTextNode = useCallback(() => {
    const newNode = {
      id: `text-${Date.now()}`,
      type: 'textNode',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { text: 'New Message' },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [setNodes]);

  // Update node data
  const updateNodeData = useCallback((nodeId, newData) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === nodeId ? { ...node, data: { ...node.data, ...newData } } : node
      )
    );
  }, [setNodes]);

  // Save flow with validation
  const saveFlow = useCallback(() => {
    // Check if there are multiple nodes and more than one has empty target handles
    const nodesWithEmptyTargets = nodes.filter((node) => {
      const hasIncomingEdges = edges.some((edge) => edge.target === node.id);
      return !hasIncomingEdges;
    });

    if (nodes.length > 1 && nodesWithEmptyTargets.length > 1) {
      toast.error('Error: More than one node has empty target handles. Each node (except one) should have incoming connections.');
      return;
    }

    // Save the flow (in a real app, this would send to a server)
    const flowData = {
      nodes,
      edges,
      timestamp: new Date().toISOString(),
    };
    
    console.log('Flow saved:', flowData);
    toast.success('Flow saved successfully!');
  }, [nodes, edges]);

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-800">Chatbot Flow Builder</h1>
        <SaveButton onSave={saveFlow} />
      </header>
      
      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Main Flow Area - Takes up most of the space */}
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>

        {/* Right Panel - Nodes Panel or Settings Panel */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          {showSettings && selectedNode ? (
            <SettingsPanel
              node={selectedNode}
              onUpdateNode={updateNodeData}
              onClose={() => {
                setShowSettings(false);
                setSelectedNode(null);
              }}
            />
          ) : (
            <NodesPanel onAddTextNode={addTextNode} />
          )}
        </div>
      </div>

      {/* Toast Notifications */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

function App() {
  return (
    <ReactFlowProvider>
      <FlowBuilder />
    </ReactFlowProvider>
  );
}

export default App;
