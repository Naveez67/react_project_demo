import React,{useContext,useState} from 'react';
import { Context } from '../../context'

function Comments({com,comments,setComments}) {
    const {loginedUser} = useContext(Context);
    const [isedit,setIsEdit]=useState(true)
    const [combody,setcombody]=useState("")
    const [name,setName]=useState("")

    const handleclick=()=>{
        setIsEdit(false)
    }

    const handleUpdate = () => {
        const indexOfObject = comments.findIndex((object) => {
            return object.id === com.id;
        });
        let newArr = [...comments];
        newArr[indexOfObject].body=combody;
        console.log(newArr)
        setComments(newArr);
        setIsEdit(true)
    };
    
    return (
        <div>
            <input 
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
                console.log(name)
            }}
            />
            <input
            // className='textarea'
            // contentEditable={isedit}
            value={com.body}
            onChange={(e)=>{
                setcombody(e.target.value)
                console.log(combody)
            }}
            />
            {loginedUser.length>0 && com.email !== loginedUser[0].email?<>
               {isedit?<>
                <button onClick={handleclick}>Edit</button>
               </>:<>
               <button onClick={handleUpdate}>Update</button>
               </>}
                
            </>:<></>}
            
        </div>
    );
}

export default Comments;