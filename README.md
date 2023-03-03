## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

### Quando usar o memo

1. Pure function components (dividir interface)
2. Compenentes que renderização demais
3. Re-renders com as mesmas props
4. Ganho de performace com componentes médios ou grandes

### Quando usar o useMemo

1. Cálculos pesados
2. Igualdade referencial (quando repassa aquela informação para componente filho)
3. Re-renders com as mesmas props
4. Ganho de performace com componentes médios ou grandes