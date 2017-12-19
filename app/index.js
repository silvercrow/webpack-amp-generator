module.exports = function render(locals) {
  return {
    '/': '<html>' + locals.greet + ' Home</html>',
    '/hello': '<html>' + locals.greet + ' Hello</html>',
    '/world': '<html>' + locals.greet + ' World</html>'
  };
};