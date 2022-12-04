import { Icons } from "../Icons/Icons";
import { Flex } from "../ProductCard/ModelProductCardStyle";
import { ListingOptionsStyle } from "./ListingOptionsStyle";

export function ListingOptions(){
  return(
    <ListingOptionsStyle>
      <div className="containerLayout">
      <Icons icon={"Grid"} />
      <Icons icon={"SortNoSelected"} />
      <p>Showing 1 - 40 of 145 items</p>
      </div>
      <div className="containerShow">
      <label>To Show:</label>
      <input placeholder="9" />
      </div>
      <Flex>
      <div className="containerSelectFilter">
      <label htmlFor="selectFilter">Choose a pet:</label>
      <select id="selectFilter">
        <option></option>
      </select>
      </div>
      </Flex>
    </ListingOptionsStyle>
  )
}