describe('Index route', function () {
    describe('index', function () {
        it('should display the correct title', function() {
            browser.get('/#');
            expect(browser.getTitle()).toContain('pruebadsadsdsa');
        });
    })
});
