import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="logo" />
      <Title>Explore repositories in GitHub</Title>
      <Form>
        <input placeholder="Write the repository name" />
        <button type="submit">Search</button>
      </Form>
      <Repositories>
        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/43707021?s=460&u=2091ef07e596a03e33f05bb5088614672bb29985&v=4"
            alt="Thiago Tavares"
          />
          <div>
            <strong>tltavares/rocket</strong>
            <p>Easy peasy high scalable an available</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/43707021?s=460&u=2091ef07e596a03e33f05bb5088614672bb29985&v=4"
            alt="Thiago Tavares"
          />
          <div>
            <strong>tltavares/rocket</strong>
            <p>Easy peasy high scalable an available</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/43707021?s=460&u=2091ef07e596a03e33f05bb5088614672bb29985&v=4"
            alt="Thiago Tavares"
          />
          <div>
            <strong>tltavares/rocket</strong>
            <p>Easy peasy high scalable an available</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="test">
          <img
            src="https://avatars1.githubusercontent.com/u/43707021?s=460&u=2091ef07e596a03e33f05bb5088614672bb29985&v=4"
            alt="Thiago Tavares"
          />
          <div>
            <strong>tltavares/rocket</strong>
            <p>Easy peasy high scalable an available</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
