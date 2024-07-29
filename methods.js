document.addEventListener('DOMContentLoaded', function (){
    
const x = document.getElementById('gme')

const a = document.createElement('div')
const b = document.createElement('div')
const c = document.createElement('div')
const d = document.createElement('div')
const e = document.createElement('div')
const f = document.createElement('div')
const g = document.createElement('div')
const h = document.createElement('div')
const i = document.createElement('div')
const j = document.createElement('div')
const k = document.createElement('div')
const l = document.createElement('div')
const m = document.createElement('div')
const n = document.createElement('div')
const o = document.createElement('div')
const p = document.createElement('div')

    const we = ['dave', '10', '30re']

     a.innerHTML = "1. " + we.length  // number of values in the array we

     b.innerHTML = "2. " + we.toString()

     c.innerHTML = "3. " + we.at(2) // to find the value using the position

     d.innerHTML = "4. " + we.at(-1) // to find the value using the position

     e.innerHTML = "5. " + we[1] // another way to find the value using the position

     f.innerHTML = "6. " + we.join('*') //it joins whatever input to the already given values

     g.innerHTML = "7. " + we.pop() // picks the last

     h.innerHTML = "8. " + we.push() // it shows the length of the array sweet

     we.push("l") // adds a value inside array

     i.innerHTML = "9. " + we // adds a value,shows the value in the array

     j.innerHTML = "10. " + we.shift() // chooses the first one

     j.innerHTML = "10. " + we.shift()

     const died = ['100','21 savage','tred']

     k.innerHTML = "13. " + we.concat(died)

     const die = ['10','tiwa savage','trend']

     const dies = ['1','twa savage','trd']

     l.innerHTML = "14. " + we.concat(die, dies)
 
     m.innerHTML = "15. " + we.concat("test",die)

     const diez = ['0','ta sava','tr']

     n.innerHTML = "15. " + diez.copyWithin(2)

     const diz = [
        [1,2],[1,3],[3,6]
     ]
     o.innerHTML = "16. " + diz.flat()

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