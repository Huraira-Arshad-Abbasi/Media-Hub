import '../styles/about.css'

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-title">About This Project</h2>
        <p className="about-description">
          <strong>MediaHub</strong> is a modern web application designed to help users explore and download a wide range of <span>images</span>, <span>videos</span>, and <span>audios</span>. This project was built to enhance my skills in frontend development using React and Vite, and it integrates APIs to fetch and display rich multimedia content.
        </p>
        <p className="about-description">
          You can use the search feature to find your favorite media and download them for personal use. This platform is entirely free to use and aims to provide a fast and smooth user experience.
        </p>
        <div className="about-links">
          <a href="https://huraira-arshad-abbasi.vercel.app/" target="_blank" rel="noopener noreferrer">🌐 My Portfolio</a>
          <a href="https://www.linkedin.com/in/huraira-arshad-7b41ab2a0/" target="_blank" rel="noopener noreferrer">💼 LinkedIn Profile</a>
        </div>
      </div>
    </section>
  )
}

