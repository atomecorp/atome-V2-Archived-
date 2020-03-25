Opal.top.$puts('hello world');
Opal.top.$clear()
Opal.Object.$new().$object_id();

// run verif function :
Opal.Object.$verif()

Opal.send(Opal.top, 'puts', ['hello world']);

var object = Opal.Object.$new()
Opal.send(object, 'object_id');


Opal.send([1,2,3], 'map', function(n) { return n*2 });
a=Opal.send([1,2,3], 'map', function(n) { return Opal.send(n, '*', 2); });
a.object


var object = Opal.Atome.$new()
Opal.send(object, 'object_id');


Opal.Atome.$new().$verif()