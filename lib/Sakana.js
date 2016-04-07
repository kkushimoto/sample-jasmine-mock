function Sakana(name) {
  const _name = name || 'tsuna';
  this.destroy = () => `${_name} is dead`;
}

module.exports = Sakana;
