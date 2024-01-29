import { CoursesList } from "@/features/courses-list/pub/courses-list";
import { CreateCourseForm } from "@/features/courses-list/pub/create-course-form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-8">
      <h1>Courses</h1>
      <CreateCourseForm revalidatePagePath="/" className="max-w-[300px] mb-5" />
      <CoursesList revalidatePagePath="/" />
    </main>
  );
}
