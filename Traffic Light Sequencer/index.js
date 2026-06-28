const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
  // 1. Check for empty phases first
  if (config.phases.length === 0) {
    // FIX: Removed the period at the end of the string
    console.log("No phases found");
    return;
  }

  // 2. Check for fault condition
  if (config.fault) {
    console.log("Faulted phase!");
    return;
  }

  // 3. Iterate through cycles and phases
  for (let c = 0; c < cycles; c++) {
    for (let i = 0; i < config.phases.length; i++) {
      const phase = config.phases[i];
      
      if (phase.duration <= 0) {
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
      }
    }
  }
}

function generateTimeline(config, cycles) {
  const timeline = [];
  let cumulativeTime = 0;

  // Process all phases across cycles without validation
  for (let c = 0; c < cycles; c++) {
    for (let i = 0; i < config.phases.length; i++) {
      cumulativeTime += config.phases[i].duration;
      timeline.push(cumulativeTime);
    }
  }

  return timeline;
}