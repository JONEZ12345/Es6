document.addEventListener('DOMContentLoaded', function (){
    
   var x = document.getElementById('container')
    
   var a = document.createElement('div')
   var b = document.createElement('div')
   var c = document.createElement('div')
   var d = document.createElement('div')
   var e = document.createElement('div')
   var f = document.createElement('div')
   var g = document.createElement('div')
   var h = document.createElement('div')
   var i = document.createElement('div')
   var j = document.createElement('div')
   var k = document.createElement('div')
   var l = document.createElement('div')
   var m = document.createElement('div')
   var n = document.createElement('div')
   var o = document.createElement('div')
   var p = document.createElement('div')
    
// ARRAY SORT METHODS

    // array for each

   const reru = [10, 20, 30]

    var xd = ""

    reru.forEach(Benidead)

    function Benidead(value, index, array){

        xd += index + 1 + ". " + value + "<br/>" 
    }

    a.innerHTML = xd

    // mapping for array!!!!!

    const ty = reru.concat(40,50,60,70)
    const blud = ty.map(kill)

    function kill(value, index, array){
        return value + 2
    }

    c.innerHTML = blud

    b.innerHTML = ty

    // array filter method

    const ti = reru.concat(40,50,60,70)
    const lust = ti.filter(kiss)

    function kiss(value, index, array){
        return value > 18
    }

    d.innerHTML = lust 

    x.appendChild(a)
    x.appendChild(b)
    x.appendChild(c)
    x.appendChild(d)
    x.appendChild(e)
    x.appendChild(f)
    x.appendChild(g)
    x.appendChild(h)
    x.appendChild(i)
    x.appendChild(j)
    x.appendChild(k)
    x.appendChild(l)
    x.appendChild(m)
    x.appendChild(n)
    x.appendChild(o)
    x.appendChild(p)
    
})