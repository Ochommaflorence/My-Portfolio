import React from 'react'
import { skills } from './SkillsData';

const Skills = () => {
    return (
       <section className="container" id="skills">
            <h2 className="title">skills</h2>
            <div className="d-flex justify-content-center flex-wrap">
                {
                    skills.map((data)=>{
                        const {id, skill} = data
                        return(
                            <div key={id}>
                                <button className="btn3" style={{ margin: "20px"}}>{skill}</button>
                            </div>
                        )
                    })
                }

            </div>


       </section>
    )
}

export default Skills
