export default function Admin() {
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">ADMIN DASHBOARD</p>
        <h1>Platform overview</h1>
        <p>Manage the platform mock data and view simple statistics.</p>
      </div>
      <div className="admin-stats">
        <article className="card">
          <strong>128</strong>
          <p>Total Jobs</p>
        </article>
        <article className="card">
          <strong>2,481</strong>
          <p>Total Applicants</p>
        </article>
        <article className="card">
          <strong>24</strong>
          <p>Upcoming Events</p>
        </article>
        <article className="card">
          <strong>1,804</strong>
          <p>Active Students</p>
        </article>
      </div>
      <article className="card chart">
        <h2>Applications per month</h2>
        <div className="chart-bars">
          {[40, 65, 50, 75, 60, 90].map((height, index) => (
            <span style={{ height: `${height}%` }} key={index}></span>
          ))}
        </div>
      </article>
    </section>
  );
}
