import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import type { Job } from "./data";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Training from "./pages/Training";
import Events from "./pages/Events";
import Certification from "./pages/Certification";
import News from "./pages/News";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import About from "./pages/About";

type Page =
  | "home"
  | "jobs"
  | "training"
  | "events"
  | "certification"
  | "news"
  | "about"
  | "account"
  | "admin";
type ModalType = "login" | "apply" | "register" | "verify" | null;

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [modal, setModal] = useState<ModalType>(null);
  const [loggedIn, setLoggedIn] = useState(
    () => localStorage.getItem("career-user") === "true",
  );
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [message, setMessage] = useState("");

  const navigate = (nextPage: Page) => {
    setPage(nextPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const showMessage = (text: string) => {
    setModal(null);
    setMessage(text);
    window.setTimeout(() => setMessage(""), 3000);
  };
  const register = (name: string) => {
    setModal("register");
    setMessage(name);
  };

  return (
    <Layout
      currentPage={page}
      onNavigate={navigate}
      onLogin={() => setModal("login")}
      loggedIn={loggedIn}
    >
      {page === "home" && (
        <Home onNavigate={navigate} onJobSelect={setSelectedJob} />
      )}
      {page === "jobs" && <Jobs onJobSelect={setSelectedJob} />}
      {page === "training" && <Training onRegister={register} />}
      {page === "events" && <Events onRegister={register} />}
      {page === "certification" && (
        <Certification
          onVerify={() => setModal("verify")}
          onRegister={register}
        />
      )}
      {page === "news" && <News />}
      {page === "about" && <About />}
      {page === "account" && (
        <Account loggedIn={loggedIn} onLogin={() => setModal("login")} />
      )}
      {page === "admin" && <Admin />}
      {message && <div className="toast">{message}</div>}
      {selectedJob && (
        <Modal title={selectedJob.title} onClose={() => setSelectedJob(null)}>
          <p>
            <strong>{selectedJob.company}</strong> · {selectedJob.location}
          </p>
          <p>{selectedJob.description}</p>
          <p>
            <strong>ทักษะที่ต้องการ:</strong> {selectedJob.skills.join(", ")}
          </p>
          <h3>คุณสมบัติผู้สมัครงาน</h3>
          <ul>
            {selectedJob.qualifications.map((qualification) => (
              <li key={qualification}>{qualification}</li>
            ))}
          </ul>
          <button
            className="button"
            onClick={() => {
              setSelectedJob(null);
              setModal("apply");
            }}
          >
            Apply Now
          </button>
        </Modal>
      )}
      {modal === "login" && (
        <Modal title="Login" onClose={() => setModal(null)}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              localStorage.setItem("career-user", "true");
              setLoggedIn(true);
              showMessage("Login successful");
            }}
          >
            <label>
              Email
              <input required type="email" placeholder="user@example.com" />
            </label>
            <label>
              Password
              <input required type="password" placeholder="Password" />
            </label>
            <p className="hint">Demo account: user@example.com</p>
            <button className="button" type="submit">
              Login
            </button>
          </form>
        </Modal>
      )}
      {modal === "apply" && (
        <Modal title="Apply for job" onClose={() => setModal(null)}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              showMessage("Application submitted");
            }}
          >
            <label>
              คำนำหน้า
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกคำนำหน้า
                </option>
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </select>
            </label>
            <label>
              ชื่อ-นามสกุล
              <input required placeholder="กรอกชื่อ-นามสกุล" />
            </label>
            <label>
              เบอร์โทร
              <input
                required
                type="tel"
                pattern="[0-9]{10}"
                placeholder="0812345678"
                title="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"
              />
            </label>
            <label>
              อีเมล
              <input required type="email" placeholder="you@example.com" />
            </label>
            <label>
              ที่อยู่
              <textarea required placeholder="กรอกที่อยู่ปัจจุบัน" />
            </label>
            <label>
              ระดับการศึกษา
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกระดับการศึกษา
                </option>
                <option>มัธยมศึกษาตอนปลาย</option>
                <option>ปวช.</option>
                <option>ปวส.</option>
                <option>ปริญญาตรี</option>
                <option>ปริญญาโท</option>
                <option>อื่น ๆ</option>
              </select>
            </label>
            <label>
              ระดับสมรรถนะ AI
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกระดับสมรรถนะ AI
                </option>
                <option>Beginner</option>
                <option>Pioneer</option>
                <option>Innovator</option>
              </select>
            </label>
            <label>
              Resume
              <input required type="file" />
            </label>
            <label>
              Cover Letter
              <textarea required placeholder="เขียนข้อความแนะนำตัวสั้น ๆ" />
            </label>
            <label className="checkbox-label">
              <input required type="checkbox" />
              ยินยอมให้เก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลตามนโยบาย PDPA
            </label>
            <button className="button" type="submit">
              ส่งใบสมัครงาน
            </button>
          </form>
        </Modal>
      )}
      {modal === "register" && (
        <Modal title="Register" onClose={() => setModal(null)}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              showMessage("Registration successful");
            }}
          >
            <label>
              คำนำหน้า
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกคำนำหน้า
                </option>
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </select>
            </label>
            <label>
              ชื่อ-นามสกุล
              <input required placeholder="กรอกชื่อ-นามสกุล" />
            </label>
            <label>
              เบอร์โทร
              <input
                required
                type="tel"
                pattern="[0-9]{10}"
                placeholder="0812345678"
                title="กรุณากรอกเบอร์โทรศัพท์ 10 หลัก"
              />
            </label>
            <label>
              อีเมล
              <input required type="email" placeholder="you@example.com" />
            </label>
            <label>
              ที่อยู่
              <textarea required placeholder="กรอกที่อยู่ปัจจุบัน" />
            </label>
            <label>
              ระดับการศึกษา
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกระดับการศึกษา
                </option>
                <option>มัธยมศึกษาตอนปลาย</option>
                <option>ปวช.</option>
                <option>ปวส.</option>
                <option>ปริญญาตรี</option>
                <option>ปริญญาโท</option>
                <option>อื่น ๆ</option>
              </select>
            </label>
            <label>
              ระดับสมรรถนะ AI
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกระดับสมรรถนะ AI
                </option>
                <option>Beginner</option>
                <option>Pioneer</option>
                <option>Innovator</option>
              </select>
            </label>
            <label>
              ตำแหน่งงานที่ต้องการสมัคร
              <select required defaultValue="">
                <option value="" disabled>
                  เลือกตำแหน่งงาน
                </option>
                <option>AI Engineer</option>
                <option>Machine Learning Engineer</option>
                <option>Data Analyst</option>
                <option>Data Scientist</option>
                <option>Generative AI Developer</option>
                <option>AI Product Specialist</option>
              </select>
            </label>
            <label className="checkbox-label">
              <input required type="checkbox" />
              ยินยอมให้เก็บ ใช้ และเปิดเผยข้อมูลส่วนบุคคลตามนโยบาย PDPA
            </label>
            <button className="button" type="submit">
              Confirm Registration
            </button>
          </form>
        </Modal>
      )}
      {modal === "verify" && (
        <Modal title="Verify Certificate" onClose={() => setModal(null)}>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              showMessage("Certificate NX-2024-8841 is valid");
            }}
          >
            <label>
              Certificate ID
              <input required placeholder="NX-2024-8841" />
            </label>
            <button className="button" type="submit">
              Verify
            </button>
          </form>
        </Modal>
      )}
    </Layout>
  );
}
