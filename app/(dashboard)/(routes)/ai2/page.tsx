"use client";
import * as z from "zod";
import { Heading } from "@/components/heading";
import { Bot, Code, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import ReactMarkdown from "react-markdown";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/empty";
import { Textarea } from "@/components/ui/textarea";

const AiPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<any>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        "https://08b6-156-195-106-88.ngrok-free.app/chat/",
        { message: values.prompt }
      );
      form.reset();
      const userResponse = {
        user: { message: values.prompt },
        bot: { message: response.data.response },
      };
      setMessages((prevMessages: any) => [...prevMessages, userResponse]);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong.");
    } finally {
      router.refresh();
      console.log(messages);
    }
  };

  return (
    <>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text."
        icon={Code}
      />
      <div className="px-4 lg:px-8">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Textarea
                      className="m-1 border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent p-2"
                      disabled={isLoading}
                      placeholder=" eg. Print 'Hello world' in python."
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              className="col-span-12 lg:col-span-2 w-full m-1"
              type="submit"
              disabled={isLoading}
              size="icon"
            >
              Generate
            </Button>
          </form>
        </Form>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader label="Nova" />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message: any) => (
              <>
                <div
                  key={message.user}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg bg-muted "
                  )}
                >
                  <Bot /> {message.bot.message}
                </div>
                <div
                  key={message.user}
                  className={cn(
                    "p-8 w-full flex items-start gap-x-8 rounded-lg bg-white dark:bg-slate-600/10 border border-black/10"
                  )}
                >
                  <User /> {message.user.message}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AiPage;
