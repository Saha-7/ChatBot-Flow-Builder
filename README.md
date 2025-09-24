# Chatbot Flow Builder

A simple and extensible Chatbot flow builder built with React and React Flow. This application allows you to create conversational flows by connecting text message nodes together.

## Features

### ✅ Implemented Features

1. **Text Node**
   - Support for text message nodes
   - Multiple text nodes can be added to a single flow
   - Nodes are added by clicking in the Nodes Panel

2. **Nodes Panel**
   - Houses all available node types
   - Currently supports Text Message nodes
   - Designed to be easily extensible for future node types
   - Click to add nodes to the flow

3. **Edge Connections**
   - Connect nodes together to create flow logic
   - Visual representation of message flow

4. **Source Handle**
   - Located at the bottom of each node
   - Can only have **one edge** originating from it
   - Red colored handle

5. **Target Handle**
   - Located at the top of each node
   - Can have **multiple edges** connecting to it
   - Green colored handle

6. **Settings Panel**
   - Replaces the Nodes Panel when a node is selected
   - Text field to edit the selected Text Node's message
   - Real-time updates to node content
   - Shows node information (ID, type, position)

7. **Save Button**
   - Validates the flow before saving
   - Shows error if more than one node has empty target handles
   - Saves flow data to console (ready for backend integration)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Creating a Flow

1. **Add Nodes**: Click on "Message" in the Nodes Panel to add text message nodes
2. **Connect Nodes**: Drag from the red source handle (bottom) of one node to the green target handle (top) of another node
3. **Edit Messages**: Click on a node to open the Settings Panel and edit the message text
4. **Save Flow**: Click the "Save Flow" button to validate and save your flow

### Flow Validation Rules

- If there are multiple nodes, only one node can have no incoming connections (the starting node)
- All other nodes must have at least one incoming connection
- The save button will show an error if this rule is violated

## Project Structure

```
src/
├── components/
│   ├── TextNode.js          # Text message node component
│   ├── TextNode.css         # Styles for text nodes
│   ├── NodesPanel.js        # Panel for available node types
│   ├── NodesPanel.css       # Styles for nodes panel
│   ├── SettingsPanel.js     # Settings panel for selected nodes
│   ├── SettingsPanel.css    # Styles for settings panel
│   ├── SaveButton.js        # Save button component
│   └── SaveButton.css       # Styles for save button
├── App.js                   # Main application component
├── App.css                  # Main application styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## Extensibility

The application is designed to be easily extensible:

### Adding New Node Types

1. Create a new node component in `src/components/`
2. Add the node type to the `nodeTypes` object in `App.js`
3. Add the new node to the `NodesPanel.js` component
4. Update the `SettingsPanel.js` to handle the new node type

### Example: Adding an Image Node

```javascript
// In App.js
const nodeTypes = {
  textNode: TextNode,
  imageNode: ImageNode, // Add new node type
};

// In NodesPanel.js
<div className="node-item" onClick={onAddImageNode}>
  <div className="node-item-icon">
    <Image size={20} />
  </div>
  <div className="node-item-content">
    <div className="node-item-title">Image</div>
    <div className="node-item-description">Image message node</div>
  </div>
</div>
```

## Technologies Used

- **React** - Frontend framework
- **React Flow** - Flow diagram library
- **Lucide React** - Icon library
- **CSS3** - Styling

## Future Enhancements

- [ ] Image message nodes
- [ ] Button/quick reply nodes
- [ ] Conditional logic nodes
- [ ] Database integration for saving flows
- [ ] Export/import functionality
- [ ] Undo/redo functionality
- [ ] Node templates
- [ ] Flow validation rules
- [ ] Real-time collaboration

## Contributing

This project is designed to be easily extensible. Feel free to add new node types or enhance existing functionality while maintaining the clean, modular architecture.

## License

This project is open source and available under the [MIT License](LICENSE).
