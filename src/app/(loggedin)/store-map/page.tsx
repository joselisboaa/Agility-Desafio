import { StoreProvider } from "@/features/Store/contexts/Store";
import StoreComponent from ".";

export default function StorePage() {
  return (
    <StoreProvider>
      <StoreComponent />
    </StoreProvider>
  );
}
