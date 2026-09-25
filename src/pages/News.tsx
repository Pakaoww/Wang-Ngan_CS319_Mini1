import { articles } from "../data";

export default function News() {
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">NEWS & ARTICLES</p>
        <h1>Ideas for your career</h1>
        <p>Articles about AI, digital technology, careers, and learning.</p>
      </div>
      <div className="grid three-columns">
        {articles.map((article) => (
          <article className="card" key={article.title}>
            <span className="article-image">Article image</span>
            <p className="company">
              {article.category} · {article.date}
            </p>
            <h2>{article.title}</h2>
            <p>{article.text}</p>
            <button className="link-button">Read More →</button>
          </article>
        ))}
      </div>
    </section>
  );
}
