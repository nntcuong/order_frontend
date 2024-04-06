import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { useForm } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
const formSchema = z
    .object({
        shopName: z.string({
            required_error: "shop name is required",
        }),
        city: z.string({
            required_error: "city is required",
        }),
        country: z.string({
            required_error: "country is required",
        }),
        deliveryPrice: z.coerce.number({
            required_error: "delivery price is required",
            invalid_type_error: "must be a valid number",
        }),
        estimatedDeliveryTime: z.coerce.number({
            required_error: "estimated delivery time is required",
            invalid_type_error: "must be a valid number",
        }),
        cuisines: z.array(z.string()).nonempty({
            message: "please select at least one item",
        }),
        menuItems: z.array(
            z.object({
                name: z.string().min(1, "name is required"),
                price: z.coerce.number().min(1, "price is required"),
            })
        ),

        imageFile: z.instanceof(File, { message: "image is required" }).optional(),
    });
type shopFormData = z.infer<typeof formSchema>;
type Props = {
    onSave: (shopFormData: FormData) => void;
    isLoading: boolean;
}
const ShopForm = ({ onSave, isLoading }: Props) => {
    const form = useForm<shopFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisines: [],
            menuItems: [{ name: "", price: 0 }],
        },
    });
    const onSubmit = (formDataJson: shopFormData) => {

    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-gray-50 p-10 rounded-lg">

            </form>

            <DetailsSection />
            <Separator />
        </Form>
    )

};
export default ShopForm;