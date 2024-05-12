describe("pow", function() {
    
    describe ("Производится возведение в степень", function(){
        it("возводит 2 в степень 3 = 8", function() {
            assert.equal(pow(2, 3), 8);
          });
        
        it("возводит 5 в степень 3 = 125", function() {
            assert.equal(pow(5, 3), 125);
        });
      
        it("возводит 3 в степень 2 = 9", function() {
            assert.equal(pow(3, 2), 9);
        });
    })

    
  });