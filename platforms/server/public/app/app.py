 eval(compile("""\
 from browser import alert
 def hello(ev):
     alert("Hello from Python!")
 hello("ev")\
 ""","python","single"))