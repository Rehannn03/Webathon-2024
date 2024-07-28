import dbConnect from "@/lib/dbConnect.ts";
//import connectDB from "../../../../../backend/src/db/index.js";
//TODO: Add DB connection propely 
import { z } from "zod";
// import UserModel from "@/model/User";
import User from "../../../../../backend/src/model/user.model.js"
import { usernameValidation } from "@/schemas/signUpSchema";

const UsernameCheckSchema = z.object({
  username: usernameValidation,
});

export async function GET(request) {

  // For old version of NextJS
  // if(request.method !== 'GET'){
  //   return Response.json(
  //     {
  //       success: false,
  //       message: "Method Not Allowed",
  //     },
  //     {
  //       status: 405,
  //     }
  //   );
  // }

  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const queryParams = { username: searchParams.get("username") };
    //vali with zod
    const result = UsernameCheckSchema.safeParse(queryParams);
    console.log("vali zod log", result); // TODO: reomve this
    if (!result.success) {
      const usernameError = result.error.format().username?._errors || [];
      return Response.json(
        {
          success: false,
          message:
            usernameError?.length > 0
              ? usernameError.join(", ")
              : "Invalid Query Parameters",
        },
        {
          status: 400,
        }
      );
    }

    const { username } = result.data;
    const existingUser = await User.findOne({
      username,
    });
    if (existingUser) {
      return Response.json(
        {
          success: false,
          message: "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    return Response.json(
      {
        success: true,
        message: "Username is available",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error Checking Username", error);
    return Response.json(
      {
        success: false,
        message: "Error Checking Username",
      },
      {
        status: 500,
      }
    );
  }
}
