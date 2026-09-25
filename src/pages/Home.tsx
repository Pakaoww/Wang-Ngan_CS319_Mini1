import { articles, jobs } from "../data";
import type { Job } from "../data";
import homepage from "../assets/pigai1.png";

type HomeProps = {
  onNavigate: (page: "jobs" | "training" | "news") => void;
  onJobSelect: (job: Job) => void;
};

export default function Home({ onNavigate, onJobSelect }: HomeProps) {
  return (
    <>
      <section className="hero">
        <div>
          <p className="eyebrow">AI & DIGITAL CAREER PLATFORM</p>
          <h1>Build your future in AI and digital.</h1>
          <p>
            Find jobs, learn new skills, join events, and earn certifications in
            one simple place.
          </p>
          <button className="button" onClick={() => onNavigate("jobs")}>
            Explore Jobs
          </button>{" "}
          <button
            className="button secondary"
            onClick={() => onNavigate("training")}
          >
            Explore Training
          </button>
        </div>
        <div className="hero-image">
          <img className="hero-shape" src={homepage} alt="AI illustration" />
        </div>
      </section>
      <section className="container">
        <div className="section-title">
          <div>
            <p className="eyebrow">FEATURED JOBS</p>
            <h2>Find your next opportunity</h2>
          </div>
          <button className="link-button" onClick={() => onNavigate("jobs")}>
            View all jobs →
          </button>
        </div>
        <div className="grid three-columns">
          {jobs.slice(0, 3).map((job) => (
            <article className="card" key={job.title}>
              <span className="company">{job.company}</span>
              <h3>{job.title}</h3>
              <p>
                {job.location} · {job.type}
              </p>
              <p>{job.description}</p>
              <button className="link-button" onClick={() => onJobSelect(job)}>
                View details →
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="info-banner">
        <div>
          <p className="eyebrow">LEARN NEW SKILLS</p>
          <h2>Training for your next step</h2>
          <p>
            Choose from practical courses in AI, data, cloud, and cybersecurity.
          </p>
          <button className="button" onClick={() => onNavigate("training")}>
            Browse Training
          </button>
        </div>
      </section>
      <section className="container">
        <div className="section-title">
          <div>
            <p className="eyebrow">NEWS & ARTICLES</p>
            <h2>Learn something new</h2>
          </div>
          <button className="link-button" onClick={() => onNavigate("news")}>
            View all articles →
          </button>
        </div>
        <div className="grid three-columns">
          {articles.map((article) => (
            <article className="card" key={article.title}>
              <span className="article-image">Article</span>
              <p className="company">
                {article.category} · {article.date}
              </p>
              <h3>{article.title}</h3>
              <p>{article.text}</p>
              <button className="link-button">Read more →</button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
