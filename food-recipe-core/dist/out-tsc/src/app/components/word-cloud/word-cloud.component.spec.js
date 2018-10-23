import { TestBed, async } from '@angular/core/testing';
import { WordCloudComponent } from './word-cloud.component';
describe('AppComponent', function () {
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [
                WordCloudComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', function () {
        var fixture = TestBed.createComponent(WordCloudComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it("should have as title 'food-recipe-core'", function () {
        var fixture = TestBed.createComponent(WordCloudComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('food-recipe-core');
    });
    it('should render title in a h1 tag', function () {
        var fixture = TestBed.createComponent(WordCloudComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to food-recipe-core!');
    });
});
//# sourceMappingURL=word-cloud.component.spec.js.map