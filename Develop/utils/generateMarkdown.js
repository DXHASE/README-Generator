// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if(license === 'Apache'){
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if(license ==='GNUv3.0'){
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  }else if(license==='Mozilla'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
}
 
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data,'data')
  return `
  # ${data.title}


  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributors](#contributors)
  - [Questions](#questions)
  - [License](#license)

  ## Description
  - ${data.description}

  ## Installation
  - ${data.installation}

  ## Usage
  - ${data.usage}

  ## Tests
  - ${data.tests}

  ## Contributors
  - ${data.contributors}

  ## Questions
  - If you have any questions over the project, contact me at: ${data.contact}
  - Github Link: ${data.github}

  ## License
  - ${renderLicenseBadge(data.license[0])}
`;
}

module.exports = generateMarkdown;
