var expect = chai.expect;

/* ******PRUEBAS PARA LA CLASE MEDIDA****** */
describe("CSV", function() 
{
     describe('#calculate', function() {
        it ('deberia saber el numero de lineas',function() {
          this.original = "\"producto\",\"precio\",\"fecha\"\n\"camisa\",\"4.3\",\"14/01\"\n\"libro de O\"Reilly\",\"7.2\",\"13/02\"";
          expect(calculate(this.original).length).to.deep.equal(3);
        });
        
        it ('deberia analizar una entrada separada por comas',function() {
          this.original = "\"producto\",\"precio\"\n\"camisa\",\"4.3\"";
          var aux = calculate(this.original);
          expect(aux[0].value).to.deep.equal(['producto','precio']);
          expect(aux[1].value).to.deep.equal(['camisa', '4.3']);
        });
    
        it ('deberia analizar una entrada separada por espacios',function() {
          this.original = "\"producto\" \"precio\" \"fecha\"\n\"camisa\" \"4.3\" \"14/01\"";
          var aux = calculate(this.original);
          expect(aux[0].value).to.deep.equal(['producto','precio','fecha']);
          expect(aux[1].value).to.deep.equal(['camisa','4.3','14/01']);
        });
    
        it ('deberia analizar una entrada con campos vacios',function() {
          this.original = "\"producto\",\"precio\",\"fecha\"\n\" \",\"4.3\",\" \"";
          var aux = calculate(this.original);
          expect(aux[1].value).to.deep.equal([' ','4.3',' ']);
        });
    
        it ('prueba error',function() {
          this.original = "\"producto\",\"precio\",\"fecha\"\n\"4.3\"";
          var aux = calculate(this.original);
          expect(aux[1].rowClass).to.deep.equal('error');
        });
    
     });    
    
        
});