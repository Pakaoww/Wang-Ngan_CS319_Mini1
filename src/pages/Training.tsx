import { useState } from "react";
import { courses } from "../data";

type TrainingProps = { onRegister: (name: string) => void };

export default function Training({ onRegister }: TrainingProps) {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter((course) =>
    `${course.name} ${course.level} ${course.format}`
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">TRAINING & UPSKILL</p>
        <h1>Learn skills for the future</h1>
        <p>Practical courses for beginners and experienced professionals.</p>
      </div>
      <div className="filters">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search courses"
        />
      </div>
      <div className="grid three-columns">
        {filteredCourses.map((course) => (
          <article className="card" key={course.name}>
            <span className="course-image">Course</span>
            <p className="company">{course.level}</p>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>
              {course.duration} · {course.format}
            </p>
            <div className="card-footer">
              <strong>{course.price}</strong>
              <button
                className="button small"
                onClick={() => onRegister(course.name)}
              >
                Register
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
