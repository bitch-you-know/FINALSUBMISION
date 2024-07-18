import React from "react";


export const WithAuth = (InnerComponent) => {
    class WrapperComponent extends React.Component {
      
        render(){
            return <InnerComponent {...this.props} />;
        }
    }
    
    return WrapperComponent ;
}