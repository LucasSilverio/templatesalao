import React, { Component } from 'react';
import { withRouter } from 'next/router';
import Loader from 'react-loader-spinner';
import ecommerceAPI from '../../services/ecommerceAPI';
import axios, { post } from 'axios';
import Cookie from 'js-cookie';

import { AlertaArea, BotaoArea, DropContainer, ErrorAlert, SuccessAlert, IptArea, UploadButton } from './styled';

class Upload extends Component {

    constructor(props){
        super(props);
        this.state={
            logged:false,
            loading:false,
            alert:'',
            filename:''
        }

        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    fileSelectedHandler(e){
        this.setState({alert:''});
        // 20480 -> 20k
//        if(e.target.files[0].size >= 102400){
        if(e.target.files[0].size >= 5120){
            this.setState({selectedFile:e.target.files[0]})
            this.setState({filename:e.target.files[0].name});
        }else{
            this.setState({alert:'A foto deve ter no mínimo 100 kb'})
            this.setState({filename:''});
        }
        
    }

    handleUpload(){
        this.setState({loading:true}); 
        const fd = new FormData();
        fd.append('Authorization', Cookie.get('token'));
        fd.append('file', this.state.selectedFile);
        fd.append('servico', this.props.servico);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        post(ecommerceAPI.BASE_URL_API+'services/updateServiceAvatar', fd,config)
        .then(res => {
            this.setState({loading:false});
            // if(res.data.error != false){
            //     this.setState({alert:res.data.error});
            // }
            if(res.data.success){
                // this.props.getImages(this.props.data);
                this.props.close();
                this.setState({alert:'Imagem atualizada com sucesso!'});
            }            
        })
    }
    
    render(){
        return(
            <>
                <DropContainer> 
                    <IptArea>
                        <input type='file' onChange={this.fileSelectedHandler} />
                    </IptArea>         
                    <BotaoArea>
                        {this.state.loading &&
                            <Loader
                                type="TailSpin"
                                color="#716FF2"
                                height={24}
                                width={24}
                            />
                        }   
                        {!this.state.loading &&
                            <>
                                {this.state.filename != '' &&
                                    <div>{this.state.filename}</div>
                                } 
                                <UploadButton onClick={this.handleUpload}>Upload Imagem</UploadButton>

                            </>
                        } 
                    </BotaoArea>  
                    <AlertaArea>    
                        {this.state.alert != '' &&
                            <SuccessAlert>{this.state.alert}</SuccessAlert>
                        }  
                    </AlertaArea>
                </DropContainer>
                
            </>
        )
    }
}

export default withRouter(Upload);