"use server";

import supabase from "./supabase";
export async function addGroup(formData) {
  console.log(formData);
  const { error } = await supabase.from("groups").insert([{ day: "Sunday" }]);

  if (error) throw new Error("can not add Group");
}

