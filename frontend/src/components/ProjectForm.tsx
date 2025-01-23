"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  client: z.string().min(2, { message: "Client must be at least 2 characters." }),
  work: z.string().min(2, { message: "Work must be at least 2 characters." }),
  story: z.string().min(2, { message: "Story must be at least 2 characters." }),
  mainImage: z
    .any()
    .refine((file) => file?.length > 0, { message: "Main Image is required." })
    .optional(),
  secondImage: z
    .any()
    .refine((file) => file?.length > 0, { message: "Second Image is required." })
    .optional(),
  thirdImage: z
    .any()
    .refine((file) => file?.length > 0, { message: "Third Image is required." })
    .optional(),
  workFlow: z.string().min(2, { message: "WorkFlow must be at least 2 characters." }),
});

export function ProjectForm({ className, ...props }: { className?: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      client: "",
      work: "",
      story: "",
      mainImage: null,
      secondImage: null,
      thirdImage: null,
      workFlow: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    formData.append("name", values.name);
    formData.append("client", values.client);
    formData.append("work", values.work);
    formData.append("story", values.story);

    if (values.mainImage?.[0]) formData.append("mainImage", values.mainImage[0]);
    if (values.secondImage?.[0]) formData.append("secondImage", values.secondImage[0]);
    if (values.thirdImage?.[0]) formData.append("thirdImage", values.thirdImage[0]);

    formData.append("workFlow", values.workFlow);

    // You can now send `formData` to your server using `fetch` or any HTTP client.
    console.log("Form submitted", values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("space-y-8", className)}
        {...props}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="client"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Client</FormLabel>
              <FormControl>
                <Input placeholder="Client" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="work"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Work</FormLabel>
              <FormControl>
                <Input placeholder="Work" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="story"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Story</FormLabel>
              <FormControl>
                <Input placeholder="Story" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mainImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Main Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="secondImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Second Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="thirdImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Third Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => field.onChange(e.target.files)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="workFlow"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-2xl">Work Flow</FormLabel>
              <FormControl>
                <Input placeholder="Work Flow" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant="secondary" className="text-2xl font-semibold" type="submit">
          Send
        </Button>
      </form>
    </Form>
  );
}
