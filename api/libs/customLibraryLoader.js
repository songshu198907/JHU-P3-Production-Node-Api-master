'use strict';

module.exports = {
  load: (name, version) => {
    if (!version) version = 2;
    let location = `./custom/v${version}/${name}`;
    try {
      return require(location);
    } catch (e) {
      throw new Error(`Failed to load custom module "${name}"`);
    }
  }
};

