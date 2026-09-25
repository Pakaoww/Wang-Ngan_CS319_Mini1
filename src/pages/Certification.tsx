import { certifications } from "../data";

type CertificationProps = {
  onVerify: () => void;
  onRegister: (name: string) => void;
};

export default function Certification({
  onVerify,
  onRegister,
}: CertificationProps) {
  return (
    <section className="container page">
      <div className="page-heading">
        <p className="eyebrow">CERTIFICATION</p>
        <h1>Show what you know</h1>
        <p>Earn certificates that help employers understand your skills.</p>
        <button className="button secondary" onClick={onVerify}>
          Verify a certificate
        </button>
      </div>
      <div className="grid two-columns">
        {certifications.map((certificate) => (
          <article className="card" key={certificate.name}>
            <span className="certificate-icon">✓</span>
            <p className="company">{certificate.organization}</p>
            <h2>{certificate.name}</h2>
            <p>
              {certificate.difficulty} · {certificate.duration}
            </p>
            <p>
              Exam fee: <strong>{certificate.fee}</strong>
            </p>
            <button
              className="button"
              onClick={() => onRegister(certificate.name)}
            >
              Register Exam
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
