import Card from "./components/recent-post-card";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="main">
            <div className="text-container">
              <h1 className="main-text">
                Hi, I am John, Creative Technologist
              </h1>
              <p className="main-para">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            <div>
              <div>
                <Image src="/image.png" alt="person" width={300} height={300} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recent-post">
        <div className="container">
          <div className="main">
            <div className="heading">
              <h3>Recent Post</h3>
              <button className="view-all-btn">View All</button>
            </div>

            <div className="card-parent">
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="container">
          <div className="main">
            <div className="main-heading">
              <h3>Featured works</h3>
            </div>

            <div className="card-parent">
              <div className="card">
                <Image
                  src="/Rectangle 30.png"
                  alt="image"
                  width={245}
                  height={180}
                />

                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>

                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/Rectangle 32.png"
                  alt="image"
                  width={245}
                  height={180}
                />

                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>

                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>

              <div className="card">
                <Image
                  src="/Rectangle 34.png"
                  alt="image"
                  width={245}
                  height={180}
                />

                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  <div className="badge-parent">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p>Dashboard</p>
                  </div>

                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}