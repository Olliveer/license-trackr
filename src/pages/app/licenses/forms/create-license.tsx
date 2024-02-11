"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createLicense } from "@/api/create-license";
import { queryClient } from "@/lib/react-query";
import { getSoftwares } from "@/api/get-softwares";

const formSchema = z.object({
  key: z.string(),
  softwareId: z.string(),
});

export function CreateLicenseForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    mutateAsync(values);
  }

  const { mutateAsync } = useMutation({
    mutationFn: createLicense,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["licenses"] });
    },
  });

  const { data: softwares, isLoading: isSoftwaresLoading } = useQuery({
    queryFn: () => getSoftwares(),
    queryKey: ["softwares"],
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create License</DialogTitle>
        <DialogDescription>
          Create a new license key for your software.
        </DialogDescription>
      </DialogHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="key"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License key</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter license key"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="softwareId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>License key</FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isSoftwaresLoading}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select software" />
                    </SelectTrigger>
                    <SelectContent>
                      {softwares?.map((software) => (
                        <SelectItem
                          key={software.id}
                          value={software.id}
                        >
                          {software.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </DialogContent>
  );
}
