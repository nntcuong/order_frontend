import { FormItem } from "@/components/ui/form";
import { ControllerRenderProps } from "react-hook-form";

type Props={
    cuisine:string;
    field: ControllerRenderProps<FiledValues,"cuisines">
}
const CuisineCheckBox=({cuisine,field}:Props)=> {
  return (
   
        <FormItem className="flex flex-row items"></FormItem>
  )
}
export default CuisineCheckBox;