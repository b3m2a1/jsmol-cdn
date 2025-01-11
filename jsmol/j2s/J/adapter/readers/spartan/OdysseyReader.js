Clazz.declarePackage("J.adapter.readers.spartan");
Clazz.load(["J.adapter.readers.spartan.SpartanInputReader"], "J.adapter.readers.spartan.OdysseyReader", null, function(){
var c$ = Clazz.declareType(J.adapter.readers.spartan, "OdysseyReader", J.adapter.readers.spartan.SpartanInputReader);
Clazz.overrideMethod(c$, "initializeReader", 
function(){
var title = this.readInputRecords();
this.asc.setAtomSetName(title == null ? "Odyssey file" : title);
while (this.line != null && this.line.indexOf("END ") < 0 && this.line.indexOf("MOLSTATE") < 0) this.rd();

if (this.line != null && this.line.indexOf("MOLSTATE") >= 0) this.readTransform();
this.continuing = false;
});
});
;//5.0.1-v4 Wed Dec 11 08:23:48 CST 2024
