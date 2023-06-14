import {ReversePipe} from "./reverse.pipe";
import {TestBed} from "@angular/core/testing";

// isolated test
describe('Pipe: ReversePipe', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ReversePipe]
  }));

  it('should reverse the inputs', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('hello')).toEqual('olleh');
  });

});
