import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'Modern, high-performance websites and landing pages built with clean code, responsive layouts, and smooth animations.',
    tags: ['React', 'Next.js / Vite', 'Responsive', 'SEO']
  },
  {
    num: '02',
    title: 'Web & Mobile Applications',
    desc: 'Interactive full-stack web apps, client dashboards, and responsive mobile experiences engineered with scalable architectures.',
    tags: ['Full Stack', 'Python', 'Node.js', 'REST APIs']
  },
  {
    num: '03',
    title: 'UI / UX & Product Design',
    desc: 'User research, wireframes, and interactive Figma prototypes with polished design systems ready for production.',
    tags: ['Figma', 'Wireframing', 'Prototypes', 'Design Systems']
  },
  {
    num: '04',
    title: 'Design to Code Execution',
    desc: 'Turnkey delivery from visual design concepts to live, deployed applications with pixel-perfect attention to detail.',
    tags: ['Pixel-Perfect', 'Frontend', 'Deployment', 'Fast Delivery']
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-label">Services</div>
        <h2 className="section-title">What I Bring to the Table</h2>
        <p className="section-subtitle">
          Designing and developing custom digital products for clients, startups, and brands.
        </p>

        <div className="services-list">
          {services.map((item) => (
            <div key={item.num} className="services-item">
              <span className="services-item__num">{item.num}</span>
              <div className="services-item__main">
                <h3 className="services-item__title">{item.title}</h3>
                <p className="services-item__desc">{item.desc}</p>
              </div>
              <div className="services-item__tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="services-tag">{tag}</span>
                ))}
              </div>
              <div className="services-item__arrow">
                <ArrowUpRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
