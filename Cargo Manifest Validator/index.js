/**
 * Normalizes the weight of a manifest to kilograms.
 * @param {Object} manifest - The manifest object.
 * @returns {Object} A new manifest object with weight in kg.
 */
function normalizeUnits(manifest) {
  const copy = { ...manifest };
  if (copy.unit === "lb") {
    copy.weight = copy.weight * 0.45;
  }
  copy.unit = "kg";
  return copy;
}

/**
 * Validates a manifest object for missing or invalid properties.
 * @param {Object} manifest - The manifest object to validate.
 * @returns {Object} An object containing validation errors, or an empty object if valid.
 */
function validateManifest(manifest) {
  const errors = {};

  // containerId: must be a positive integer
  if (!('containerId' in manifest)) {
    errors.containerId = "Missing";
  } else {
    const id = manifest.containerId;
    if (!(Number.isInteger(id) && id > 0)) {
      errors.containerId = "Invalid";
    }
  }

  // destination: must be a non-empty string (after trimming)
  if (!('destination' in manifest)) {
    errors.destination = "Missing";
  } else {
    const dest = manifest.destination;
    if (typeof dest !== 'string' || dest.trim() === '') {
      errors.destination = "Invalid";
    }
  }

  // weight: must be a positive number and not NaN
  if (!('weight' in manifest)) {
    errors.weight = "Missing";
  } else {
    const w = manifest.weight;
    if (typeof w !== 'number' || Number.isNaN(w) || w <= 0) {
      errors.weight = "Invalid";
    }
  }

  // unit: must be "kg" or "lb"
  if (!('unit' in manifest)) {
    errors.unit = "Missing";
  } else {
    const u = manifest.unit;
    if (u !== "kg" && u !== "lb") {
      errors.unit = "Invalid";
    }
  }

  // hazmat: must be a boolean
  if (!('hazmat' in manifest)) {
    errors.hazmat = "Missing";
  } else {
    if (typeof manifest.hazmat !== 'boolean') {
      errors.hazmat = "Invalid";
    }
  }

  return errors;
}

/**
 * Processes a manifest by validating it and logging the appropriate success or error messages.
 * @param {Object} manifest - The manifest object to process.
 */
function processManifest(manifest) {
  const validationErrors = validateManifest(manifest);

  if (Object.keys(validationErrors).length === 0) {
    const normalized = normalizeUnits(manifest);
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    // Log containerId as-is, even if missing (will be undefined)
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validationErrors);
  }
}

console.log(normalizeUnits(
  {
    containerId: 68,
    destination: "Salinas",
    weight: 101,
    unit: "lb",
    hazmat: true
  }));

console.log(validateManifest(
  {
    containerId: 1,
    destination: "Santa Cruz",
    weight: 304,
    unit: "kg",
    hazmat: false
  }));

console.log(validateManifest({}))

console.log(validateManifest(
  {
    containerId: null,
    destination: "Santa Cruz",
    weight: 304, unit: "kg",
    hazmat: false
  }));

console.log(validateManifest(
  {
    containerId: 0,
    destination: 405,
    weight: -84,
    unit: "pounds",
    hazmat: "no"
  }));

console.log(validateManifest({ containerId: -2 }));

console.log(validateManifest({ containerId: 3.50 }));

console.log(validateManifest({ destination: "  " }));

console.log(validateManifest({ weight: NaN }));

processManifest(
  {
    containerId: 55,
    destination: "Carmel",
    weight: 400,
    unit: "lb",
    hazmat: false
  }
);

processManifest(
  {
    containerId: -88,
    destination: "Soledad",
    weight: NaN
  }
);

processManifest(
  {
    destination: "Watsonville",
    hazmat: true
  }
);
