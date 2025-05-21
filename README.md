# ZustandDemo - State Management Demo Application

A React TypeScript demo application showcasing modern state management with Zustand, Immer, and other best practices.

![Zustand Demo Screenshot](https://via.placeholder.com/800x400?text=Zustand+Demo+App)

## 🚀 Features

- **Global State Management** using Zustand with sliced stores
- **Immutable State Updates** with Immer middleware
- **Persistent Storage** with localStorage
- **Type Safety** with TypeScript
- **UI Components** with TailwindCSS
- **Debugging Tools** with Redux DevTools integration
- **Optimized Re-renders** with useShallow

## 📋 Application Overview

This application demonstrates a simple e-commerce shopping cart that allows users to:

- Browse a list of products
- Add products to cart
- Change product quantities in cart
- Automatically calculate total price
- View user information
- Persist cart data between sessions

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Zustand** - State management
- **Immer** - Immutable state updates
- **TailwindCSS** - Styling
- **Vite** - Build tool

## 📊 Project Structure

```
src/
├── components/           # UI components
│   ├── ui/               # Reusable UI components
│   ├── Cart.tsx          # Shopping cart component
│   ├── ChangeQuantityButton.tsx # Product quantity management
│   └── User.tsx          # User information component
├── lib/                  # Utilities and helpers
│   └── mockData.ts       # Product data
├── store/                # Zustand store
│   ├── cardSlice.ts      # Cart state slice
│   ├── store.ts          # Combined store
│   └── userSlice.ts      # User state slice
├── types/                # TypeScript type definitions
│   ├── cartProduct.ts    # Cart product type
│   ├── product.ts        # Product type
│   └── store.ts          # Store type definitions
└── App.tsx               # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ZustandDemo.git
   cd ZustandDemo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🧰 Zustand Store Architecture

The application uses a sliced store pattern with Zustand:

- **Store**: Combines multiple slices and applies middleware
- **UserSlice**: Manages user state like name, age, and address
- **CartSlice**: Handles shopping cart operations (add, remove, update quantities)

### Example: Using the Store

```tsx
// Access state
const { products, total } = useStore(state => ({
  products: state.products,
  total: state.total
}));

// Use actions
const { addProduct, removeProduct } = useStore(state => ({
  addProduct: state.addProduct,
  removeProduct: state.removeProduct
}));
```

## 🔄 Data Flow

1. User interacts with UI (e.g., clicks "Add to Cart")
2. Action is dispatched from component to store
3. Store updates state immutably using Immer
4. Components re-render with new state
5. State is persisted to localStorage

## 🧠 Key Concepts Demonstrated

- **Store Slicing**: Organizing state into logical domains
- **Middleware Composition**: Combining multiple middleware (devtools, persist, immer)
- **Selector Optimization**: Using selectors to prevent unnecessary re-renders
- **Type Safety**: Full TypeScript integration for state management
- **Immutable Updates**: Using Immer for intuitive state mutations

## 📝 License

MIT

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📬 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - your.email@example.com

Project Link: [https://github.com/yourusername/ZustandDemo](https://github.com/yourusername/ZustandDemo)
