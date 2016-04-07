
describe('Neko Mock', () => {
  const nyanSong = 'nyan!';
  let sakanaSpy;
  let Neko;

  function cleanModuleCache() {
    delete require.cache[require.resolve('../lib/Sakana')];
    delete require.cache[require.resolve('../lib/Neko')];
    delete require.cache[require.resolve('../index')];
  }

  beforeAll(function() {
    cleanModuleCache();
    const Sakana = require('../lib/Sakana');
    this.sakanaModule = module.children[0];
    sakanaSpy = spyOn(this.sakanaModule, 'exports');
    Neko = require('../index').Neko;
  });

  afterAll(function() {
    cleanModuleCache();
  });

  beforeEach(function() {
  });

  afterEach(function() {
  });

  it('should be call Sakana constructor', function() {
    const neko = new Neko({
      name: 'tora',
      song: nyanSong,
    });
    expect(sakanaSpy).toHaveBeenCalled();
  });

  it('should be eat with not throw and Sakana#destroy is called', function() {
    let sakanaMock;
    const self = this;
    sakanaSpy.and.callFake(function(args) {
      this.destroy = jasmine.createSpy('destroy');
      sakanaMock = this;
    });

    const neko = new Neko({
      name: 'tora',
      song: nyanSong,
    });

    expect(neko.eat).not.toThrow();
    expect(sakanaMock.destroy).toHaveBeenCalled();
  });

  it('should be eat return Sakana#destroy return value', function() {
    const expectedMessage = 'sakana is alive';

    let sakanaMock;
    const self = this;
    sakanaSpy.and.callFake(function(args) {
      this.destroy = jasmine.createSpy('destroy')
      .and.callFake(() => {
        return expectedMessage;
      });
      sakanaMock = this;
    });

    const neko = new Neko({
      name: 'tora',
      song: nyanSong,
    });

    expect(neko.eat()).toEqual(expectedMessage);
  });
});
