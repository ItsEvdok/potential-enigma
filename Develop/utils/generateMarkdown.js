// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license){
    return '';
  } else {
    return `https://img.shields.io/badge/${license}-<MESSAGE>-<COLOR>`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return '';
  } else {
    return 
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  const{github, email, title, desc, license, install, tests, usage, contr} = data;

  return `
# ${title}
---
## Description

${desc}

## Table of Contents

[Installation](${install})
[Usage](${usage})
[License](${license})
[Contributing](${contr})
[Test](${tests})
[Questions](${github})

## Installation

To install necessary dependencies, run the following command:

${install}

## Usage

${usage}

## License

This projects is licensed under ${license} license.

## Contributing

${contr}

## Tests

To run tests, run the following command:

${tests}
    
## Questions 

If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${github}.
`;
}

module.exports = generateMarkdown;
