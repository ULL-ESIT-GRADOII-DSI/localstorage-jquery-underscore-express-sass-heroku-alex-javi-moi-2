var expect = chai.expect;

/* ******PRUEBAS PARA LA CLASE MEDIDA****** */
describe("CSV", function() 
{
     describe('#calculate', function() {
        it ('deberia saber el numero de lineas',function() {
          this.original = "\"color\",\"numero\",\"objeto\"\n\"azul\",\"2\",\"coche\"\n\"rojo\",\"6,2\",\"lápiz\"";
          expect(calculate(this.original).length).to.deep.equal(3);
        });
     });    
    
        
});