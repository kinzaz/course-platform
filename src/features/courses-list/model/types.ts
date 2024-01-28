interface CourseListElement {
  id: string;
  name: string;
  description: string;
}

interface CreateListElementCommand {
  name: string;
  description: string;
}

interface DeleteCourseListElementCommand {
  id: string;
}
