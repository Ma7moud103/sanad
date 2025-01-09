import supabase from "./supabase";

export async function getCurrentGroups() {
  let { data: groups, error } = await supabase.from("groups").select("*");

  if (error) throw new Error("can not get groups");

  return groups;
}
