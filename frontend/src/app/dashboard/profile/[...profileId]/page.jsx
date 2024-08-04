"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "Rehan Shah",
    username: "@rehanaShahana123",
    age: "",
    contact: "",
    address: "",
    gender: "",
    city: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "profilePicture") {
      setFormData((prevData) => ({
        ...prevData,
        profilePicture: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const handleSave = () => {
    // Handle the save action, e.g., make an API call to update the user profile
    console.log("Saved data: ", formData);
  };

  return (
    <div className="flex w-full h-full bg-gradient-to-br from-slate-100 to-purple-500 pt-8 pr-4">
      <div className="w-1/4 p-8">
        <h1 className="text-4xl font-bold">Account</h1>
        <p className="mt-2 text-lg text-gray-600">Add changes to your account</p>
      </div>
      <div className="w-3/4 flex justify-end items-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="profilePicture">Profile Picture</Label>
                  <Input
                    id="profilePicture"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" value={formData.username} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="age">Age</Label>
                  <Input id="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="contact">Contact</Label>
                  <Input id="contact" value={formData.contact} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="gender">Gender</Label>
                  <Input id="gender" value={formData.gender} onChange={handleChange} />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" value={formData.city} onChange={handleChange} />
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={handleSave}>Save changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
            <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}