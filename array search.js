document.addEventListener('DOMContentLoaded', function (){
    
    var x = document.getElementById('contain')
     
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
     
    var  werey = ['12', '16', 'true', 'null', 'die', 'mean']

    var hire = werey.indexOf('die')

    a.innerHTML = hire
//end

    var hired = werey.includes('die')

    b.innerHTML = hired
//end

    var lust = werey.find(kizz)

    function kizz(value, index, array){
        return value == '16'
    }

    c.innerHTML = lust
//end

    var need = werey.findIndex(fam)

    function fam(value, index, array){
        return value == 'true'
    }

    d.innerHTML = need
//end

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
