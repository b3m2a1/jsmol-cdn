Clazz.declarePackage("org.apache.tools.bzip2");
Clazz.load(null, "org.apache.tools.bzip2.CBZip2InputStreamFactory", ["org.apache.tools.bzip2.CBZip2InputStream"], function(){
var c$ = Clazz.declareType(org.apache.tools.bzip2, "CBZip2InputStreamFactory", null);
Clazz.defineMethod(c$, "getStream", 
function(is){
is.read( Clazz.newByteArray (/*org.eclipse.jdt.core.dom.NumberLiteral*/2, 0), 0, 2);
return  new org.apache.tools.bzip2.CBZip2InputStream(is);
}, "java.io.InputStream");
});
;//5.0.1-v4 Wed Dec 11 08:23:48 CST 2024