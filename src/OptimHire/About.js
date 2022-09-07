import { Box,Link} from "@awsui/components-react";
import React, { useState } from 'react';


class Main extends React.Component{
    constructor(props){
        super(props);
        
    }
  
    setData(type,e){
        console.log(e,type);
        
            this.setState(
                {
                    query:e.detail.value,
                }
            )
        

    }
    render(){  
            
        
        return(
            <>
            <Box
            color="inherit"
            display="block"
            fontWeight="bold"
            padding="s"
            textAlign='center'
            variant='div'
            >
                <Link>
                https://www.testproject.com
                </Link>
            </Box>
            <Box
            color="inherit"
            display="block"
            fontWeight="bold"
            padding="s"
            textAlign='center'
            variant='div'
            >
                <Link>
                testproject
                </Link>
            </Box>
            
            
            </>
            
        )
    }
}



export default Main;