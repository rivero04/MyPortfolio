import uniqid from 'uniqid'
import { skills, tools } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null
  if (!tools.length) return null

  return (
    <div className='skills-container'>
      <section className='section skills' id='skills'>
        <h2 className='section__title'>Technologies</h2>
        <ul className='skills__list'>
          {skills.map((skill) => (
            <li key={uniqid()} className={`skills__list-item btn btn--plain ${skill.class}`}>
              {skill.name}
            </li>
          ))}
        </ul>
      </section>

      <section className='section tools' id='tools'>
        <h2 className='section__title'>Environments and Tools</h2>
        <ul className='skills__list'>
          {tools.map((tool) => (
            <li key={uniqid()} className={`skills__list-item btn btn--plain ${tool.class}`}>
              {tool.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Skills
