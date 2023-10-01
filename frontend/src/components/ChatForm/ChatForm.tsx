import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Textarea } from "../ui/textarea";
import { LockClosedIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  userDescription: z.string().min(10, {
    message: "User description must be at least 10 characters.",
  }),
});

export const ChatForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userDescription: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Who are you?</CardTitle>
        <CardDescription>Tell APFlix.AI a bit about yourself</CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="userDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="e.g. My name is Tom, I'm 23 from Tel Aviv."
                      maxLength={500}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="flex gap-2">
                    <LockClosedIcon />
                    Please notice that this is a public chat, so don't share any
                    personal information.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Submit
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-3 w-3"
              >
                <path
                  fill="#ffffff"
                  d="m476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52A24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4a24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8Z"
                ></path>
              </svg>
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
