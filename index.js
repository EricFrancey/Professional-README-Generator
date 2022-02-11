const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe the function of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will this program be used?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Describe testing process or add links:',
    },
    {
      type: 'list',
      message: "Choose a license for your project.",
      choices: ['GNU AGPLv3 [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)', 'GNU GPLv3 [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 'GNU LGPLv3 [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)', 'Mozilla Public License 2.0 [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)', 'Apache License 2.0 [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 'Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)', 'The Unlicense [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'],
      name: 'license'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address',
    }
  ]);
};

const generateREADME = ({ title, description, installation, usage, contributing, tests, license, github, email }) =>
  `
  ## ${title}
  
  ## Description
  ${description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation 
  ${installation}

  ## Usage 
  ${usage}

  ## Contributing 
  ${contributing}

  ## Tests 
  ${tests}
  
  ## License
  ${license}

  ## Questions
  [GitHub](https://github.com/${github})

  ${email}
  `;

const init = () => {
  promptUser()
    .then((answers) => fs.writeFileSync('example.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to example.md'))
    .catch((err) => console.error(err));
};

init();
