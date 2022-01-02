 let obj = {
     x: 50,
     y: 30,
     getCoordsAsstring: function () {
         const x = this.x
         const y = this.x
         return ` x : ${x}  y : ${y}`
     }
 }
 //s

 getCoords = obj.getCoordsAsstring.bind(obj)
 console.clear()
 console.log(getCoords())