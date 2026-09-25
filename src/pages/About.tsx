const members = [
  {
    name: "จตุพร สุบิน",
    email: "jatuporn.subi@bumail.net",
    phone: "0999999999",
  },
  {
    name: "ณัฐพงศ์ กัลยารัตน์",
    email: "nattapong.kany@bumail.net",
    phone: "0933323005",
  },
  {
    name: "พิชญุตม์ มารมย์",
    email: "pichayut.maro@bumail.net",
    phone: "0999999999",
  },
];

export default function About() {
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">ABOUT US</p>
        <h1>Wang Ngan</h1>
        <p>ข้อมูลบริษัทและสมาชิกผู้จัดทำโครงงาน</p>
      </div>
      <div className="grid two-columns">
        <article className="card">
          <p className="eyebrow">ข้อมูลบริษัท</p>
          <h2>Wang Ngan</h2>
          <p>ทีมผู้จัดทำโครงงานจากมหาวิทยาลัยกรุงเทพ</p>
        </article>
        <article className="card">
          <p className="eyebrow">ที่อยู่</p>
          <h2>มหาวิทยาลัยกรุงเทพ</h2>
          <p>
            มหาวิทยาลัยกรุงเทพ วิทยาเขตรังสิต
            <br />
            9/1 หมู่ 5 ถนนพหลโยธิน ตำบลคลองหนึ่ง
            <br />
            อำเภอคลองหลวง จังหวัดปทุมธานี 12120
          </p>
        </article>
      </div>
      <div className="section-title">
        <div>
          <p className="eyebrow">OUR TEAM</p>
          <h2>ผู้ติดต่อโครงการ</h2>
        </div>
      </div>
      <div className="grid three-columns">
        {members.map((member) => (
          <article className="card" key={member.email}>
            <h3>{member.name}</h3>
            <p>
              <strong>อีเมล:</strong>
              <br />
              <a href={`mailto:${member.email}`}>{member.email}</a>
            </p>
            <p>
              <strong>โทรศัพท์:</strong>
              <br />
              <a href={`tel:${member.phone}`}>{member.phone}</a>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
