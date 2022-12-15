import { RadioCheckboxStyle } from "./RadioCheckboxStyle";
import { useProductsContext } from "../../context/useProductsContext";
import { listProducts } from "../../services/listProducts";

export interface RadioCheckboxProps {
  buttonLabel: string;
  buttonTextValue: string;
}

export function RadioCheckbox({
  buttonLabel,
  buttonTextValue,
}: RadioCheckboxProps) {
  const { setProducts } = useProductsContext();

  async function fetchProducts(filterType: string, filterValue: string) {
    const listProductsResult = await listProducts(filterType, filterValue);
    setProducts(listProductsResult);
  }

  function handleFilter(filterType: string, filterValue: string) {
    fetchProducts(filterType, filterValue);
  }

  return (
    <RadioCheckboxStyle>
      <label className="container">
        {buttonLabel}
        <input
          type="checkbox"
          onChange={() => handleFilter(buttonTextValue, buttonLabel)}
        />
        <span className="checkmark"></span>
      </label>
    </RadioCheckboxStyle>
  );
}
