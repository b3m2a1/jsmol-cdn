Clazz.declarePackage("java.util.zip");
Clazz.load(["com.jcraft.jzlib.Inflater"], "java.util.zip.Inflater", null, function(){
var c$ = Clazz.declareType(java.util.zip, "Inflater", com.jcraft.jzlib.Inflater);
Clazz.defineMethod(c$, "initialize", 
function(nowrap){
return this.init(0, nowrap);
}, "~B");
});
;//5.0.1-v2 Mon Apr 08 08:45:17 CDT 2024
