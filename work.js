document.addEventListener('DOMContentLoaded', function (){
    
    // Object Definitions(Variables,Properties and Methods)

    var x = document.getElementById('jones')
    var y = document.getElementById('jonesesca')
    var z = document.getElementById('contain')

    var t = document.createElement("div")
    var s = document.createElement("div")
    var e = document.createElement("div")
    var n = document.createElement("div")
    var o = document.createElement("div")
    var h = document.createElement("div")
    var j = document.createElement("div")
    var u = document.createElement("div")
    var m = document.createElement("div")
    var l = document.createElement("div")
    var q = document.createElement("div")
    var fg = document.createElement("div")
    var df = document.createElement("div")
    var yu = document.createElement("div")
    var jk = document.createElement("div")
    var er = document.createElement("div")
    

    var stringObject = new String("anything")
    var numberObject = new Number(10)
    var booleanObject = new Boolean("true")

    var person = {
        firstname: "delta",
        lastname: "kara",
        fullname: function (){
            return this.firstname + " " + this.lastname
        },
        address: {
            street: "alashepe sapele water road"
        }
    }

    n.innerHTML = person.address.street

    x.innerHTML = person.firstname

    y.innerHTML = person.fullname()

    y.appendChild(n)

    t.textContent = stringObject
    s.textContent = numberObject
    e.textContent = booleanObject
    

    // Oblect Literal

    const personTwo = new Object()
    personTwo.firstname = "dave"
    personTwo.lastname = "daves"
    personTwo.age = 20
    personTwo.fullname = function (){
        return this.firstname + " " + this.lastname
    }
    personTwo.FULLNAME = function (){
        return (this.firstname + " " + this.lastname).toUpperCase()
    }

    j.innerHTML = personTwo.FULLNAME()
    h.innerHTML = personTwo.fullname() + " will be " + personTwo.age
    o.innerHTML = personTwo.firstname + " " + personTwo.lastname +  " is " + personTwo.age
    
    // Object In Loop

    var v = {
        firstname: "delta",
        lastname: "kara"
    }

    let r = " "
    for(let d in v){
        r += v[d] + " "
    }

    u.innerHTML = r

    // Using Object.Value

    var c = {
        firstname: "ebonyi ",
        lastname: " kreamy",
        sex: " female",
        style: " undefined"
    }

    const b = Object.values(c)

    m.textContent = b

    // Stringify !important

    var a = {
        firstname: "ebon",
        lastname: " krea",
        sex: " femal",
        style: " undefi",
        age: 10,
        date: new Date()
    }

    var g = JSON.stringify(a)

    l.innerHTML = g

    // Stringify functions

    var kay = {
        firstname: "deltan",
        lastname: "karame",
        fullname: function (){
            return "benita"
        },
    }

    kay.fullname = kay.fullname.toString()

    var w = JSON.stringify(kay)

    q.innerHTML = w

    // Stringify array

    const jonnex = ['jones', '10', 'true',' ','undefined','null','12234rdffr0']

    const gen = JSON.stringify(jonnex)

    fg.innerHTML = gen

    // constructor

    function Howl(week,table,cat){
        this.cane = week
        this.dog = table
        this.form = cat
        this.gate = function(){
            return this.cane + ' ' + this.form
        }
        this.gat = function(yum){
             this.cane = yum
        }
    }

    const kol = new Howl('game', 10, '230')

    const huy = new Howl('gam', 1, '23')

    
    huy.frem = 'sad'

    df.innerHTML = kol.cane + ' is ' + kol.dog + ' today ' + kol.form

    yu.innerHTML = huy.frem + ' is ' + huy.dog + ' today ' + huy.form

    jk.innerHTML = kol.gate()

    huy.gat('bad girl')

    er.innerHTML = huy.cane

    z.appendChild(t)
    z.appendChild(s)
    z.appendChild(e)
    z.appendChild(j)
    z.appendChild(h)
    z.appendChild(o)
    z.appendChild(u)
    z.appendChild(m)
    z.appendChild(l)
    z.appendChild(q)
    z.appendChild(fg)
    z.appendChild(df)
    z.appendChild(yu)
    z.appendChild(jk)
    z.appendChild(er)

})


