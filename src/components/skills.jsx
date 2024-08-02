import React from 'react'
import './styles/Skills.css'

import { ReactComponent as Express } from './images/skills/express-svgrepo-com.svg';
import { ReactComponent as Python } from './images/skills/icons8-python-250.svg';
import { ReactComponent as Node } from './images/skills/icons8-node-js (1).svg';
import { ReactComponent as Js1 } from './images/skills/icons8-javascript.svg';
import { ReactComponent as Mern } from "./images/skills/mern.svg"
import { ReactComponent as React1 } from './images/skills/reactjs-fill-svgrepo-com.svg';
import { ReactComponent as Sql } from './images/skills/mysql-svgrepo-com.svg';
import { ReactComponent as Mongo } from './images/skills/mongodb-svgrepo-com.svg';
import { ReactComponent as Html } from './images/skills/html5-02-svgrepo-com.svg';
const Skills = () => {


  return (
    <>
      <div className="containerSkills" >
        <div className='left-content'>
          {/* <img src={images1} alt="" /> */}
          <table className="equal-size-table">
            <tbody>
              <tr>
                <td><Html id='svg-image' fill='#ccc' width='65%' height="100%" /></td>
                <td><Js1 id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                <td><React1 id='svg-image' fill='#ccc' width='90%' height="100%" /></td>
              </tr>
              <tr>
                <td><Node id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                <td><Mern id='svg-image' fill='white' width='80%' height="100%" /></td>
                <td><Express id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
              </tr>
              <tr>
                <td><Mongo id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                <td><Sql id='svg-image' fill='#ccc' width='80%' height="100%" /></td>
                <td><Python id='svg-image' fill='#ccc' width='70%' height="100%" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='skills-table' >
          <div className="top-tables">
            <table className="table1 table-bordered" >
              <thead>
                <tr>
                  <th>Front End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>React Js</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                </tr>
                <tr>
                  <td>HTML</td>
                </tr>
                <tr>
                  <td>CSS</td>
                </tr>
              </tbody>
            </table>
            <table className="table1 table-bordered" >
              <thead>
                <tr>
                  <th>Back End</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Express Js</td>
                </tr>
                <tr>
                  <td>Node Js</td>
                </tr>
                <tr>
                  <td>Mongo DB</td>
                </tr>
                <tr>
                  <td>SQL</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='bottom-table'>
            <table className=" table-bordered" >
              <thead>
                <tr>
                  <th>Others</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Python</td>
                </tr>
                <tr>
                  <td>C</td>
                </tr>
                <tr>
                  <td>C++</td>
                </tr>
                <tr>
                  <td>Data Structures and Algorithms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>

  )
}

export default Skills
