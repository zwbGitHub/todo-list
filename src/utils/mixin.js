export default {
    directives:{
        classActive:{
            // bind(el,binding){
            //     console.log(el,binding)
            // },
            inserted(el,binding){
                console.log('inserted',el,binding)
            },
            update(el,binding){
              setTimeout(()=>{
                  el.className ='add-click'
              },100)
              console.log(binding)
            }
        }
    }
}