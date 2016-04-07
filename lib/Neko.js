const Sakana = require('./Sakana');

function Neko(options) {
  const _name = options.name || 'tama';
  const _song = options.song || 'nan';
  const _esa = new Sakana();

  this.sing = () => `♪ ${_song}`;
  this.sleep = () => `${_name} is sleeping`;
  this.eat = () => _esa.destroy();
}

module.exports = Neko;
