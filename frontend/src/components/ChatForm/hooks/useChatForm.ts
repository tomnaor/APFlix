import { useMovieRecommendationMutation } from "@/queries/movieRecommendation/movieRecommendation.mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  userDescription: z.string().min(10, {
    message: "User description must be at least 10 characters.",
  }),
});

export const useChatForm = () => {
  const { mutateAsync, isPending } = useMovieRecommendationMutation();

  const formProps = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userDescription: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    formProps.reset();
    const { data } = await mutateAsync({
      userDescription: values.userDescription.trim(),
    });

    return data;
  };

  return {
    formProps,
    onSubmit,
    isPending,
  };
};
