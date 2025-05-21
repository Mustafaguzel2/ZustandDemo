import { ChangeQuantityButton } from "./components/ChangeQuantityButton";
import { Cart } from "./components/Cart";
import { Button } from "./components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "./components/ui/card";
import { PRODUCTS_DATA } from "./lib/mockData";
import { useStore } from "./store/store";
import { User } from "./components/User";

const App = () => {
  const { addProduct } = useStore((state) => state);
  const { products: cartProducts } = useStore((state) => state);
  return (
    <main className="flex flex-col items-center justify-start mt-10 h-screen gap-4">
      <h1 className="text-4xl font-bold">Zustand + Immer + Shallow</h1>
      <div className="flex flex-col gap-4 min-w-96 justify-center">
        <div className="flex flex-row row-span-2 gap-4">
          <div className="flex gap-2 flex-1 justify-start">
            <User />
          </div>
          <div className="flex gap-2 flex-1 justify-end">
            <Cart />
          </div>
        </div>
        <h2 className="text-2xl font-bold">Products:</h2>

        <div className="flex flex-col gap-2 max-w-sm">
          {PRODUCTS_DATA.map((product) => (
            <Card key={product.id}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                {cartProducts.filter((p) => p.id === product.id).length > 0 && (
                  <span className="text-sm text-gray-500">
                    {
                      cartProducts.filter((p) => p.id === product.id)[0]
                        .quantity
                    }{" "}
                    in cart
                  </span>
                )}
              </CardContent>
              <CardFooter>
                {cartProducts.find((p) => p.id === product.id) ? (
                  <ChangeQuantityButton productId={product.id} />
                ) : (
                  <Button onClick={() => addProduct(product)}>
                    Add to cart
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
