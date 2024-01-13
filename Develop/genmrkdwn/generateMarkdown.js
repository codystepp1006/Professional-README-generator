// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//Here we are using the markdown language. for details https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
function licenceBadge(license) {
  if (license !== "none"){
    return "";
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function licenseLink(license) {
  if (license !== "none"){
    return "";
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function licenseSection(license) {
  if (license !== "none"){
    return `## License
    Licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
     return `# ${data.projectname}

  by ${data.yourname}

  ${licenceBadge(data.license)}
  ${licenseLink(data.license)}
  ## Description
  ${data.projreason}
  ## Requirenments
  ${data.require}
  ## Usage
  ${data.usage}
  ## GitHub username
  * Github: [${data.github}](https://github.com${data.github}/)
  ## Contributors 
  ${data.contributors}
  ## How to use it?
  ${data.directions}
  [!NOTE] 
  ${data.message}
  ${licenseSection(data.license)}
`;

}

module.exports = generateMarkdown;
