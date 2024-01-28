"use server";

import { revalidatePath } from "next/cache";
import { courseRepository } from "./courses-repository";

export const createCourseAction = async (
  revalidatePagePath: string,
  command: CreateListElementCommand,
) => {
  await courseRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};
