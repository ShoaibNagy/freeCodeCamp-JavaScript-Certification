// 1. Define the projectStatus object constant
const projectStatus = {
  PENDING: { description: "Pending Execution" },
  SUCCESS: { description: "Executed Successfully" },
  FAILURE: { description: "Execution Failed" }
};

// 2. Define the ProjectIdea class
class ProjectIdea {
  constructor(title, description) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  // 3. Method to update the project status
  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

// 4. Define the ProjectIdeaBoard class
class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  // 5. Method to pin an idea to the board
  pin(idea) {
    this.ideas.push(idea);
  }

  // 6. Method to unpin an idea from the board
  unpin(idea) {
    const index = this.ideas.indexOf(idea);
    if (index !== -1) {
      this.ideas.splice(index, 1);
    }
  }

  // 7. Method to count the number of ideas
  count() {
    return this.ideas.length;
  }

  // 8. Method to format the board's contents to a string
  formatToString() {
    let result = `${this.title} has ${this.count()} idea(s)\n`;
    
    for (const idea of this.ideas) {
      result += `${idea.title} (${idea.status.description}) - ${idea.description}\n`;
    }
    
    return result;
  }
}

// ==========================================
// Example Usage / Testing the Implementation
// ==========================================

// Creating a board
const techProjects = new ProjectIdeaBoard("Tech Projects Board");

// Creating and pinning an idea
const smartHome = new ProjectIdea(
  "Smart Home System", 
  "An integrated system to control lighting, temperature, and security devices remotely."
);
techProjects.pin(smartHome);

// Testing formatToString
console.log(techProjects.formatToString());
// Output: 
// Tech Projects Board has 1 idea(s)
// Smart Home System (Pending Execution) - An integrated system to control lighting, temperature, and security devices remotely.

// Updating status
smartHome.updateProjectStatus(projectStatus.SUCCESS);
console.log(techProjects.formatToString());
// Output: 
// Tech Projects Board has 1 idea(s)
// Smart Home System (Executed Successfully) - An integrated system to control lighting, temperature, and security devices remotely.

// Unpinning an idea
techProjects.unpin(smartHome);
console.log(techProjects.count()); // Output: 0