export function PostComponent({name,subtitle,time,image,description}){
       return(
         <div style={{height:300,width:480,border:"1px solid grey",borderRadius:8,backgroundColor:"white",marginBottom:10}}>
           <div style={{margin:15}}>
             <div style={{display:"flex"}}>
               <img src={image} style={{ height:50,width:50,borderRadius:50,border:"1px solid grey"}}/>
               <div style={{marginLeft:15}}>
                 <b>{name}</b>
                 <div>{subtitle}</div>
                 {/* Here if time is not undefined then the following content of the block will get rendered */}
                 {time!=undefined && <div style={{display:"flex"}}>
                   <div>{time}</div>
                   <div>
                     <img src="https://th.bing.com/th/id/OIP.JFr9QZ7D0XZUBQzYw0GpLwHaHa?rs=1&pid=ImgDetMain" alt="" style={{height:10,   width:10, marginLeft:3}}/>
                  </div>
                </div>}
              </div>
            </div>
            <br />
            <div>{description}</div>
          </div>
        </div>
      )
    }