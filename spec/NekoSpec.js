const Neko = require('../index').Neko;

describe('Neko', () => {
  const nyanSong = 'nyan!';
  beforeEach(() => {
    this.neko = new Neko({
      name: 'tora',
      song: nyanSong,
    });
  });

  afterEach(() => {
    delete this.neko;
  });

  it('should be able to sing a song', () => {
    expect(this.neko.sing()).toEqual(`♪ ${nyanSong}`);
  });

  describe('Sleep', () => {
    beforeEach(() => {
      spyOn(this.neko, 'sleep').and.callThrough();
    });

    it('should be able to sleep', () => {
      expect(this.neko.sleep()).toEqual('tora is sleeping');
      expect(this.neko.sleep).toHaveBeenCalled();
    });
  });

  it('should be able to eat', () => {
    expect(this.neko.eat()).toEqual('tsuna is dead');
  });
});
