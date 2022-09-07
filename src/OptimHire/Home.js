import { Button , AppLayout,Box,Link} from "@awsui/components-react";
import React, { useState } from 'react';
import Main from './Main'
import About from './About'


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            openNavigationBar:false,
            navigationListItem:["Home","Form","About Us"],
            activeTab:"Home"
        }
    }
    toggleNavigation(){
        this.setState(
            {
                openNavigationBar:!this.state.openNavigationBar,
            }
        )
    }
    changeComponent(tab){
        this.setState(
            {
                activeTab:tab,
            }
        )
    }
    render(){  
        let navigationList=[];
        this.state.navigationListItem.map((item,index)=>{
            navigationList.push(
            <Box
                color="inherit"
                display="block"
                fontWeight="bold"
                padding="s"
                textAlign='center'
                variant='div'
                id={index}
            >
                <Link
                onFollow={this.changeComponent.bind(this,item)}
                >
                {item}
                </Link>
                
            </Box>);
        });

        let content=
        <>
        <Box
            color="inherit"
            display="block"
            fontWeight="bold"
            padding="s"
            textAlign='center'
            variant='div'
            >
        
            Its nice to meet you!!!
        
            </Box>
            <Box
            color="inherit"
            display="block"
            fontWeight="bold"
            padding="s"
            textAlign='center'
            variant='div'
            >
        
            To explore more, please check the menu
        
            </Box>
        </>

        if(this.state.activeTab=="Form"){
            content=<Main />
        }
        else if(this.state.activeTab=="About Us"){
            content=<About />
        }
        
        
        return(
            <>
            <AppLayout 
            contentType={"table"}
            ariaLabels={this.state.a}
            maxContentWidth={10}
            navigationOpen={this.state.openNavigationBar}
            contentHeader="Welcome User!!!"
            content={content}
            navigation={navigationList}
            onNavigationChange={this.toggleNavigation.bind(this)}
            >
            </AppLayout>
            
            </>
            
        )
    }
}



export default Home;