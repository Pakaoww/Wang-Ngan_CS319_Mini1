const members = [
  {
    name: "Jatuporn Subin",
    email: "jatuporn.subi@bumail.net",
    phone: "0956382140",
  },
  {
    name: "Nattapong Kanyarat",
    email: "nattapong.kany@bumail.net",
    phone: "0933323005",
  },
  {
    name: "Phichayut Marom",
    email: "phichayut.maro@bumail.net",
    phone: "0991871173",
  },
];

export default function About() {
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">ABOUT US</p>
        <h1>Wang Ngan</h1>
        <p>Company information and project team members</p>
      </div>
      <div className="grid two-columns">
        <article className="card">
          <p className="eyebrow">COMPANY INFORMATION</p>
          <h2>Wang Ngan</h2>
          <p>Project team from Bangkok University</p>
        </article>
        <article className="card">
          <p className="eyebrow">ADDRESS</p>
          <h2>Bangkok University</h2>
          <p>
            Bangkok University, Rangsit Campus
            <br />
            9/1 Moo 5, Phahonyothin Road, Khlong Nueng
            <br />
            Khlong Luang, Pathum Thani 12120
          </p>
        </article>
      </div>
      <div className="section-title">
        <div>
          <p className="eyebrow">OUR TEAM</p>
          <h2>Project contacts</h2>
        </div>
      </div>
      <div className="grid three-columns">
        {members.map((member) => (
          <article className="card" key={member.email}>
            <h3>{member.name}</h3>
            <p>
              <strong>Email:</strong>
              <br />
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              <a href={`tel:${member.phone}`}>{member.phone}</a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
