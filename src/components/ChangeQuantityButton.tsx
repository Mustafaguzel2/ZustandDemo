import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { Button } from "./ui/button";
import { useEffect } from "react";

type Props = {
  productId: string;
};

export const ChangeQuantityButton = ({ productId }: Props) => {
  const { getProductById, incrementQuantity, decrementQuantity, setTotal } =
    useStore(
      useShallow((state) => ({
        getProductById: state.getProductById,
        incrementQuantity: state.incrementQuantity,
        decrementQuantity: state.decrementQuantity,
        setTotal: state.setTotal,
      }))
    );
  const product = getProductById(productId);

  useEffect(() => {
    const unSub = useStore.subscribe((state) => {
      const total = state.products.reduce(
        (acc: number, curr: { price: number; quantity: number }) => 
          acc + curr.price * curr.quantity, 
        0
      );
      setTotal(total);
    });
    
    // Fire immediately once to calculate initial total
    const state = useStore.getState();
    const initialTotal = state.products.reduce(
      (acc: number, curr: { price: number; quantity: number }) => 
        acc + curr.price * curr.quantity,
      0
    );
    setTotal(initialTotal);
    
    return () => unSub();
  }, [setTotal]);
  return (
    <>
      {product && (
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => decrementQuantity(productId)}
          >
            -
          </Button>
          <span>{product.quantity}</span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => incrementQuantity(productId)}
          >
            +
          </Button>
        </div>
      )}
    </>
  );
};
