import React from 'react';
import './skills.css';
import CountUp from 'react-countup';

function SkillsSection() {
  const handleCountUpUpdate = ({ progress, start, end }) => {
    const progressBar = document.querySelector('.progress-bar');
    const color = getColor(progress);
    progressBar.style.backgroundColor = color;
  };

  const getColor = (progress) => {
    const width = progress < 100 ? `${progress}%` : '100%';
  
    if (progress < 50) {
      return `linear-gradient(to right, red ${width}, transparent ${width})`;
    } else if (progress < 80) {
      return `linear-gradient(to right, orange ${width}, transparent ${width})`;
    } else {
      return `linear-gradient(to right, green ${width}, transparent ${width})`;
    }
  };
  
  return (
    <section id="skills">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Our Skills</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          </p>
        </header>

        <div className="skills-content">
          <div className="progress">
            <div className="progress-bar bg-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">
                HTML <CountUp end={100} suffix="%" onUpdate={handleCountUpUpdate} />
              </span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">
                CSS <CountUp end={90} suffix="%" onUpdate={handleCountUpUpdate} />
              </span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">
                JavaScript <CountUp end={75} suffix="%" onUpdate={handleCountUpUpdate} />
              </span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}>
              <span className="skill">
                Photoshop <CountUp end={55} suffix="%" onUpdate={handleCountUpUpdate} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
