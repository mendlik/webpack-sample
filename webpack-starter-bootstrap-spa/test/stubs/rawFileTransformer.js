module.exports = {
  process(src) {
    const escaped = JSON.stringify(src);
    return `module.exports = ${escaped};`;
  }
};
