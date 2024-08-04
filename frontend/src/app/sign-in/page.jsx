"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { signInSchema } from "@/schemas/signInSchema";
import apiClient from "@/api-client/apiClient";
import axios from "axios";
import { useUserStore } from "@/stores/store";

export default function SignInForm() {
  const router = useRouter();
  const { user, update } = useUserStore();

  const form = useForm({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const { toast } = useToast();
  const onSubmit = async (data) => {
    console.log(data); //TODO: Remove this line
    try {
      //TODO: Add the API endpoint for sign-in\
      const bodyData = {
        email: data.identifier,
        password: data.password,
      };
      const response = await apiClient.post("/users/login", bodyData);
      toast({
        title: "Success",
        description: response.data.message,
      });
      const userData = await apiClient.get("/users/profile");
      const user = userData.data.data.user;
      update(user);

      router.replace("/appointment");
    } catch (error) {
      const axiosError = error;
      let errorMessage = axiosError.response?.data.message;
      toast({
        title: "Sign In Failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };
  //     const result = await signIn('credentials', {
  //       redirect: false,
  //       identifier: data.identifier,
  //       password: data.password,
  //     });

  //     if (result?.error) {
  //       if (result.error === 'CredentialsSignin') {
  //         toast({
  //           title: 'Login Failed',
  //           description: 'Incorrect username or password',
  //           variant: 'destructive',
  //         });
  //       } else {
  //         toast({
  //           title: 'Error',
  //           description: result.error,
  //           variant: 'destructive',
  //         });
  //       }
  //     }

  //     if (result?.url) {
  //       router.replace('/dashboard');
  //     }
  //   };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          //TODO: Add the website name
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
            Welcome Back to Website Name
          </h1>
          <p className="mb-4">Sign in to continue your meds</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              name="identifier"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email/Username</FormLabel>
                  <Input {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
            Not a member yet?{" "}
            <Link href="/sign-up" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}