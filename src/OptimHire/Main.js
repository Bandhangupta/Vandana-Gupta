import { Button , Box, Input,SpaceBetween} from "@awsui/components-react";
import React, { useState } from 'react';


class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            
            query:''
        }
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
        

                            
            
            <Input
            inputMode="text"
            placeholder="Enter your question"
            readOnly={false}
            value={this.state.query}
            onChange={this.setData.bind(this,"query")}
            >                
            </Input>
            <SpaceBetween
            direction="vertical"
            size='m'
            ></SpaceBetween>
            <Button>Submit Query</Button>
            </Box>
            
            </>
            
        )
    }
}



export default Main;