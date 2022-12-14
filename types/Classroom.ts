import { Course } from "./Course";
import { Subject } from "./Subject";

export type Classroom = {
  id: string;
  grade: number;
  name: string;
  teacher: string;
  lastLessonDate: string | null;
  studentsCount: number;
  courses?: Course[];
};
