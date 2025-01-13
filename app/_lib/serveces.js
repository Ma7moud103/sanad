import supabase from "./supabase";

export async function getCurrentGroups() {
  let { data: groups, error } = await supabase.from("groups").select("*");

  if (error) throw new Error("can not get groups");

  return groups;
}

export async function getGrades() {
  let { data: grades, error } = await supabase.from("grades").select("*");
  if (error) throw new Error("can not get grades");

  return grades;
}

export async function getCourses() {
  let { data: courses, error } = await supabase.from("courses").select("*");
  if (error) throw new Error("can not get courses");

  return courses;
}

export async function getTeachers() {
  let { data: teachers, error } = await supabase.from("teachers").select("*");
  if (error) throw new Error("can not get teachers");

  return teachers;
}
